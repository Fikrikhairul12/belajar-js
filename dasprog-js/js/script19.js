/* 
* cara membuat object
? object literal
? function declaration
? constructor function (keyword new)
? object.create() */

/* 
! 1. object literal */
var mhs1 = {
    nama : "Fikri Khairul",
    nim : "11220318",
    email : "khairulfikri1289@gmail.com",
    jurursan : "Sistem Informasi"
};

var mhs2 = {
    nama : "Dodo Dodido",
    nim : "11220390",
    email : "dodidododo89@gmail.com",
    jurursan : "Sistem Informasi"
};


/* 
! 2. function declaration */
function buatObjectMahasiswa(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama,
    mhs.nim = nim,
    mhs.email = email,
    mhs.jurusan = jurusan

    return mhs;
};

var mhs3 = buatObjectMahasiswa('Dudung', '11222019', 'Dudungsprt@gmail.com', 'Pertanian');


/*
! 3. constructor function */
function Mahasiswa(nama, nim, email, jurusan){
    // var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
};

var mhs4 = new Mahasiswa('Kurniawanti', '11224090', 'Kurnianti11@gmail.com', 'Fakultas Kedokteran'); // jika tdk menggunkan new sama saja dgn function declaration dn hrs ada var dan return