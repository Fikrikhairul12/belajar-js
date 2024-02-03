var noAngkot = 1,
    angkotBeroperasi = prompt('Jumlah Angkot yang dapat beroperasi saat ini'),
    jmlhAngkot = 10;

while(noAngkot <= angkotBeroperasi){
    document.getElementById('angkot').innerHTML += 'Angkot No. ' + noAngkot + ' beroperasi dengan baik. <br>';
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
noAngkot++
}

for(noAngkot; noAngkot <= jmlhAngkot ; noAngkot++){
    document.getElementById('angkot').innerHTML += 'Angkot No. ' + noAngkot + ' sedang tidak beroperasi. <br>';
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}