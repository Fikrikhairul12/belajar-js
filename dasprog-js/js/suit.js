var tanya = true;
while(tanya){
    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan komputer
    // membangkitkan pilihan random
    var comp = Math.random();

    if(comp < 0.34) {
        comp = 'gajah';
    }else if(comp >= 0.34 && comp < 0.67){
        comp = 'semut';
    }else{
        comp = 'orang';
    }

    var hasil = ''
    // menentukan rules
    if(p == comp){
        hasil = 'seri';
    }else if(p == 'gajah'){
        // if(comp == 'orang'){
        //     hasil = 'menang';
        // }else{
        //     hasil = 'kalah';
        // }

        hasil = (comp == 'orang') ? 'menang' : 'kalah';
    }else if(p == 'orang'){
        hasil = (comp == 'gajah') ? 'kalah' : 'menang';
    }else if(p == 'semut'){
        hasil = (comp == 'orang') ? 'kalah' : 'menang';
    }else{
        hasil = 'memasukkan pilihan yang salah';
    }

    // tampilkan hasil
    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi?');
}
alert('terimakasih sudah bermain');