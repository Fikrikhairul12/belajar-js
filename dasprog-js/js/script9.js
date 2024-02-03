/*
* Pengulangan & Pengkondisian Bersarang */

var s = '';
for(var i = 0; i < 10; i++){
    if(i <= 5){
        for(var j = 0; j < i; j++){
            s += '*';
        }
    }else{
        for(var j = 10; j > i; j--){
            s += '*';
        }
    }
    
    s += '\n'; 
}
console.log(s);