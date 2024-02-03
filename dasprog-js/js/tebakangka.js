var lagi = true;
alert('Selamat datang, kita akan bermain tebak angka \nEnjoy ya :)')
while (lagi){
    alert('Tebak angka dari 1-10 \nKamu punya 3 kesempatan');
    var angka = Math.random();
    
    if(angka < 0.1){
        angka = 1;
    }else if (angka < 0.2){
        angka = 2;
    }else if (angka < 0.3){
        angka = 3;
    }else if (angka < 0.4){
        angka = 4;
    }else if (angka < 0.5){
        angka = 5;
    }else if (angka < 0.6){
        angka = 6;
    }else if (angka < 0.7){
        angka = 7;
    }else if (angka < 0.8){
        angka = 8;
    }else if (angka < 0.9){
        angka = 9;
    }else{
        angka = 10;
    }
    
    for(var t = 2; t >= 0; t--){
        var p = prompt('Coba tebak berapa? ');
        if(p == angka){
            alert('WAH KAMU BENAR!!');
            break;
        }else if(p < angka){
            if(t > 0){
                alert('Angka yang kamu pilih terlalu RENDAH! \nKesempatan kamu tinggal ' + t + ' kali lagi');
            }else{
                alert('Angka yang kamu pilih terlalu RENDAH! \nYah kesempatan kamu habis cuy');
            }
        }else if(p > angka){
            if(t > 0){
                alert('Angka yang kamu pilih terlalu TINGGI! \nKesempatan kamu tinggal ' + t + ' kali lagi');
            }else{
                alert('Angka yang kamu pilih terlalu TINGGI! \nYah kesempatan kamu habis cuy');
            }
        }
        else{
            if(t > 0){
                alert('YANG KAMU MASUKIN BUKAN ANGKA TAU!! \nKesempatan kamu tinggal ' + t + ' kali lagi');
            }else{
                alert('YANG KAMU MASUKIN BUKAN ANGKA TAU!! \nYah kesempatan kamu habis cuy');
            }
        }
    }
    if(t == -1){
        alert('Yah sayang sekali kamu gagal \nAngka yang dimaksud adalah ' + angka);
    }
    lagi = confirm('Coba main lagi?');
}
alert('Terimakasih sudah bermain :)');