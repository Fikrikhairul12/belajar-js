var noAngkot = 1,
    jmlhAngkot = 10;

    // document.getElementById('angkot').innerHTML = '';

while(noAngkot <= jmlhAngkot){
    var data = 'Angkot No. ' + noAngkot + ' beroperasi dengan baik.';
    document.getElementById('angkot').innerHTML += data + '<br>';
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
noAngkot++
}