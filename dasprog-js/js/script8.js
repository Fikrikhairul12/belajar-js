/*
* Percabangan switch */
var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, hotdog, susu, softdrink');

switch(item){
    case 'nasi' :
        alert('makanan / minuman SEHAT!!');
        break;
    case 'susu' :
        alert('makanan / minuman SEHAT!!');
        break;
    case 'hotdog' :
        alert('makanan / minuman TIDAK SEHAT!!');
        break;
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!!');
        break;
    default:
        alert('anda memasukkan makanan / minuman yang salah');
        break;
}