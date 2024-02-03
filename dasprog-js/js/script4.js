/* 
* perulangan while */

// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

/*
! user menentukan looping */

var ulang = true,
    k = 1;
while(ulang){
    console.log('hello world! ' + k);
    ulang = confirm('lagi?');
    k ++
}

/*
! program menentukan looping */

var i = 1,
    j = prompt('mau ulang berapa kali :');
while( i <= j ){
    console.log('hello world! ' + i);
    i ++
}