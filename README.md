# TryFirebase
>**[BEKUP 2.0-Backend]** *Code-starter* untuk sesi #6 - Pengenalan **Firebase**

Download dan unzip ke dalam folder mana saja pada komputer lokal, tanpa harus menggunakan server lokal karena tidak mengandung server-side program

Code-starter hanya berisi kode HTML (dan pelengkapnya) untuk tampilan Web Front-end yang akan dihubungkan dengan Firebase API dalam live-coding saat pertemuan.

## Templates
* [Bootstrap](http://getbootstrap.com/)
* [Freelancer - One Page Theme](https://startbootstrap.com/template-overviews/freelancer/)

## Pre-requisites
* sudah men-download dan install JavaScript RunTime [NodeJS](https://nodejs.org/en/)
* sudah menginstall Firebase CLI, dengan perintah 
```
npm install -g firebase-tools
/* diketik pada command line */
/* butuh NodeJS versi 0.10.0 atau yang lebih baru */
```
* *check* instalasi Firebase CLI dengan perintah
```
firebase version
```

## Another Sample
* [Bekup-Firebase](https://github.com/sofyanthayf/bekup-firebase), dibangun dengan menggunakan CI, tetapi tidak dapat di-*hosting* pada layanan Firebase Hosting (alasannya akan dijelaskan dalam pembahasan)

## Update 31/10/16
* Pengelompokan folder **starter** dan **built 161030**
  * Isi folder **starter** adalah persiapan web front-end sebelum ditambahkan utilitas Firebase 
  * Isi folder **built 161030** adalah contoh yang telah dikembangkan dan diuji-coba bersama dalam pertemuan ke-6 Talent Dev 1 Tech tanggal 30/10/2016
* hasil uji coba sudah dikembangkan dengan kemungkinan mendefinisikan sendiri ***key*** untuk child baru pada data Firebase (lihat file **gbook.js**)
* Belum dicoba jika menggunakan nama sebagai key dan ada pemasukan ulang nama yang sama
