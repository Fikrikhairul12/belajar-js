var jmlhAngkot = 10,
    // angkotBeroperasi = prompt('Angkot yang beroperasi saat ini:');
    angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}