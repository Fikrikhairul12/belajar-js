/* 
* rekusif
? sebuah fungsi yg memanggil diriny sndri. jika tdk ad kondisi brhnti, maka akan meemanggil fungsi sndri tanpa henti
? semua looping bisa dbuat rekursif, tpi tdk sebalikny

* base case
? kondisi akhir dri rekursif yg menghasilkn nilai

* implementasi rekursif
    ! menggantikan looping
    ! fibonacci
    ! pencarian dn penelusuran pd struktur data list dn tree
    ! bahasa pemrograman yg tdk memiliki pengulangan*/

//contoh base case

function cetakAngka(n){
    if( n === 0) return; // base case
    console.log(n);
    cetakAngka(n-1); // rekursif
}

cetakAngka(10);