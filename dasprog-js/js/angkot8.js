/* 
* pengelola penumpang angkot
! variabel array
    ? var penumpang = [];  1,2,3, .. 15
! pengelolaan penumpang
    ? penumpang naik
        todo: tambahPenumpang()
    ? penumpang turun
        todo: hapusPenumpang()
! tambahPenumpang()
    ? 2 parameter
        todo: namaPenumpang
        todo: array penumpang
    ? Rules :
        todo: jika angkot kosong, maka penumpang naik duduk di kursi pertama
        todo: penumpang brikutny duduk di kursi brikutny
        todo: jika ada kursi kosong (karena penumpang turun), penumpang yg naik berikutnya duduk di kursi kosong trlbh dahulu
        todo: asumsi kursi tidak akan penuh dn akan bertambah terus jika ada penumpang naik
        todo: nama penumpang tidak blh sama, untuk menghindari kebingungan ketika nnti penumpang turun
! hapusPenumpang()
    ? 2 parameter
        todo: namaPenumpang
        todo: array penumpang
    ? Rules:
        todo: jika angkot kosong, tampilkan pesan bahwa angkot kosong
        todo: jika penumpang yg namany sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
        todo: jika tidak ada penumpang yg namany sesuai, tampilkan pesan kesalahan*/

var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if( penumpang[i] == undefined ){
                penumpang[i] = namaPenumpang;
                return penumpang
            }else if( penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + ' sudah di dalam angkot');
                return penumpang;
            }else if( i == penumpang.length - 1 ){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('angkot saat ini masih kosong');
        return penumpang;
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }
            else if(i == penumpang.length - 1){
                console.log('nama ' + namaPenumpang + ' tidak ada di dalam angkot');
                return penumpang;
            }
        }
    }
}
