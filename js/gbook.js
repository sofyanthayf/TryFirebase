
//firebase reference object
var fbref = firebase.database().ref();

//tampilan tabel isi buku tamu
fbref.on("child_added", snap => {
	
		var nama = snap.child("nama").val();
		var email = snap.child("email").val();
		var pesan = snap.child("pesan").val();

		var dtgl = new Date( snap.child("tanggal").val() ).toDateString();

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


function submitClick(){
	var fnama = document.getElementById('nama').value;
	var femail = document.getElementById('email').value;
	var fpesan = document.getElementById('pesan').value;

	var tgl = new Date().getTime(); 

	var data = {nama: fnama, email: femail, pesan: fpesan, tanggal: tgl};

	fbref.push().set(data);
}
