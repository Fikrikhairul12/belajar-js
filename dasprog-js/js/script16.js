/*
* function declaration
? function identifier (parameterlist opt) {functionbody}
? lebih fleksibel (dpt ditulis dimanapun)
    ? konsep hoisting
? mudah dipahami pemula
    !contoh
    function tampilPesan (nama){
        alert('hallo ' + nama);
    }

* function expression 
? function identifier opt (parameterlist opt) {functionbody}
? hrs didefinisikn trlbh dahulu sblm dipanggil
? lebih powerfull:
    ? sbgai closure
    ? sbgai argumen untuk function lain
    ? IIFE (Immediately Invoked Function Expression)
    !contoh
    var tampilPesan = function (nama){
        alert('hallo ' + nama);
    }

*/