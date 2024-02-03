var jmlhAngkot = 10,
    // angkotBeroperasi = prompt('Angkot yang beroperasi saat ini:');
    angkotBeroperasi = 6;
    // Angkotlembur = prompt('Angkot yang habis keluar bengkel:');

for(var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    }else if(noAngkot == 8 || noAngkot == 10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}