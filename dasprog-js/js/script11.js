/* 
* function yg baik hanya mengerjakan 1 hal spesifik saja 
? function
    ! blok kode yg dibuat untk mlakukan tugas spesifik
    ! dpt dipanggil berulang kali
    ! memudahkan penelusuran
    ! reusability 
    
? parameter / argumen
    ! data yg dikirim dari luar saat pemanggilan function, untk dgunakan dlm function
    ! anggap sbg variabel khusus untk function
    ! optional, blh ada atau tidak
    ! jka tdk ada kosongkn, tpi kurung hrs ttp ditulis
    ! jka ada, tls sbnyk mungkin yg dbutuhkn
    
? return
    ! sebuah function biasanya mengemblkan sebuah nilai 
    ! mnggunkan keyword return, lalu diikuti dgn nilai kembalianny
    ! kegunaanny adlh untk memberitahu interpreter bhwa kita tlh selesai mengerjkn sesuatu dn 'inilah' hasilnya
    ! stlh smpai pd keyword return, function akn brhnti berjln*/

function jumlahvolumeDuakubus(a, b){
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

console.log(jumlahvolumeDuakubus(8, 3));
console.log(jumlahvolumeDuakubus(10, 15));
