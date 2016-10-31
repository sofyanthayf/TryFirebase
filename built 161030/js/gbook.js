
var fbref = firebase.database().ref();

//fbref.on("value", snap => { $('#judul').text( snap.child('level2').val() )  });

// jika server firebase Offline
var presenceRef = firebase.database().ref("disconnectmessage");
presenceRef.onDisconnect().remove(function(err) {
  if (err) {
  	$('#disconnectwarn').show();
  } else {
  	$('#disconnectwarn').hide(); 	
  }
});

//tampilan tabel isi buku tamu
fbref.on("child_added", snap => {
	
		var nama = snap.child("nama").val();
		var email = snap.child("email").val();
		
		var pesan = snap.child("pesan").val();
		pesan = pesan.replace(/\r?\n/g, '<br />');

		var dtgl = new Date( snap.child("time").val() ).toDateString();

		$('#posts:last-child').append(
				   "<tr>\
						<td>\
							<div class='dispnama'>"+ nama +"</div>\
							<div class='dispmail'>"+ email +"</div>\
							<div class='disptgl'>"+ dtgl + "</div>\
						</td>\
						<td>\
							<div class='dispmess'>"+ pesan +"</div>\
						</td>\
					</tr>"
			);
	}
)


function submitClick() {
	var dnama = $('#nama').val();
	var demail = $('#email').val();
	var dpesan = $('#pesan').val();

	var tgl= new Date().getTime();
 
	data = { nama: dnama, email: demail, pesan: dpesan, time: tgl };

/*	push data dengan timestamp (tgl) sebagai key */
	fbref.child(tgl).set(data);

/*	
	fbref.child(demail).set(data); --> untuk membuat email sebagai key -> GAGAL!

	email tidak bisa dijadikan key, karena mengandung '@' yang terlarang untuk jadi key
	(baca: https://www.firebase.com/docs/web/guide/understanding-data.html)

	ada solusi di: https://groups.google.com/forum/#!topic/firebase-talk/vtX8lfxxShk
	tapi belum sempat dicoba

*/

}