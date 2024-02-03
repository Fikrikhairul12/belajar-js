/* control flow
pada dasarnya sama sprti yg lain, flow nya tetap dari atas kebawah

* pengulangan 
    ? for
    ? while
    ? do while
* pengkondisian / percabangan
    ? if
    ? if.. else
    ? if.. else if.. else
    ? switch */

    var angka = prompt('Masukkan Angka :');
    if(angka % 2 === 0 ){
        alert(angka + ' adalah bilangan genap');
    }else if(angka % 2 === 1){
        alert(angka + ' adalah bilangan ganjil');
    }else{
        alert(angka + ' adalah bukan termasuk angka');
    }