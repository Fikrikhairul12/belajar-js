var d=new Date()
var weekday=new
Array("Sunday","Monday","Tuesday","Wednesday"
,"Thusday","Friday","Saturday")
var monthname=new
Array("Jan","Feb","Mar","Apr","May","Jun",
"Jul","Aug","Sep","Oct","Nov","Dec")
document.write(weekday[d.getDay()]+" ")
document.write(d.getDate()+". ")
document.write(monthname[d.getMonth()]+" ")
document.write(d.getFullYear()+" ")
document.write(d.getHours()+":")
document.write(d.getMinutes()+":")
document.write(d.getSeconds()+":")
document.write(d.getMilliseconds()+" ") 

function updateClock() {
    var now = new Date();
    var day = now.toLocaleDateString('en-US', { weekday: 'short' });
    var date = now.getDate();
    var month = now.toLocaleDateString('en-US', { month: 'short' });
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var timeString = day + ', ' + date + ' ' + month + ' ' + year + ', ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('realtime-clock').innerHTML = timeString;
}

// Memperbarui waktu setiap detik
setInterval(updateClock, 1000);

// Panggil fungsi pertama kali untuk menampilkan waktu awal
updateClock();