// manipulasi array

/* 
* 1. menambahkan isi array */
// var arr = [];
// arr[0] = "Rama";
// arr[1] = "Ardi";
// arr[2] = "Dian";

// console.log(arr);

/* 
* 2. menghapus isi array */
// var arr = ["Rama", "Ardi", "Devi"];
// arr[2] = undefined;

// console.log (arr);

/* 
* 3. menampilkan isi array */
// var arr = ["Rama", "Ardi", "Devi", "Dani"];

// for(var i = 0; i < arr.length; i++){
//     console.log('Mahasiswa ke- ' + (i+1) + ' : ' + arr[i]);
// }


/* 
* Array Method
? length
? join 
? push, pop, shift, unshift 
? slice, splice */

/* 
! 1. join */
// var arr = ['Rama', 'Ardi', 'Devi'];
// console.log(arr.join(', '));

/* 
! 2. push & pop */
// arr.push('Dani', 'Fahri'); // dpt lngsung menambahkan bbrp elemen
// arr.pop(); // harus satu per satu

// console.log(arr.join(', '));

/* 
! 3. unshift & shift */
// arr.unshift('Dani'); // menambahkan elemen di awal
// arr.shift(); // menghilangkn elemen pertama

// console.log(arr.join(', '));

/* 
! 4. splice */
// var arr = ['Rama', 'Ardi', 'Devi'];
// // splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2, ...)
// arr.splice(2, 0 , 'Sari', 'Gading');
// console.log(arr.join(' - '));

/* 
! 5. slice */
// slice[awal, akhir]
// slice menghasilkan array baru
// var arr = ['Rama', 'Ardi', 'Sari', 'Gading','Devi'];
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));
