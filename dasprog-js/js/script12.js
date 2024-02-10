/* 
* parameter
? variabel yg dtlis ddlm kurung pd saat function dbuat, dgunakan untk menampung nilai yg dkirimkn saat function dpanggil.

* argument
? nilai yg dkrmkn ke parameter saat fungsi dpnggil

*/
// contoh
function tambah(a,b){
    return a + b;
}

var a = 10; // parseInt dgnakan untk mengubah string ke integer
var b = 20;
var hasil = tambah(a,b);
console.log(hasil);

/* 
! jika parameter lbh sndkt dari argument, maka argument klbihanny akn diabaikn
! jika parameter lbh bnyk dri argument, maka parameter kelebihanny akn diisi dgn nilai undefined

* arguments
? array yg brisi nilai yg dkirimkn saat fungsi dipanggil
*/

// contoh
function kurang(){
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total
}

var x = kurang(3,4,5,6);
console.log(x);