// manipulasi array

/* 
! 6. forEach */
// var angka = [1,2,3,4,5,6,7,8];
// var arr = ['Rama', 'Ardi', 'Sari', 'Gading','Devi'];

// angka.forEach(function(e){
//     console.log(e);
// });

// arr.forEach(function(e, i){ // i = index (0,1,2,...), e = elemen ('Rama', 'Ardi',...)
//     console.log('Mahasiswa ke- ' + (i+1) + ' adalah ' + e);
// });

/* 
! 7. map */
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){ // map mengembalikan array sdgnkn foreach tidak
//     return e * 2;
// });
// console.log(angka2.join(' - '));

/* 
! 8. sort */
// mengurutkan dari yg terkecil
// var angka = [2,6,4,5,3,1,7,9,8,10];
// angka.sort(function(a, b){
//     return a-b; //
// });
// console.log(angka.join(' - '));

/* 
! 9. filter */
// mencari elemen pd array, mengembalikan bnyk nilai array
// var angka = [2,6,4,5,3,1,7,9,8,10];
// var angka2 = angka.filter(function(e){
//     return e > 5;
// });
// console.log(angka2.join(' - '));

/* 
! 9. find */
// mencari elemen pd array, mengembalikan 1 nilai array
// var angka = [2,6,4,5,3,1,7,9,8,10];
// var angka2 = angka.find(function(e){
//     return e == 7;
// });
// console.log(angka2);