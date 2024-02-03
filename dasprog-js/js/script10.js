// Fungsi untuk menghasilkan baris Segitiga Pascal
// function generatePascalTriangle(rows) {
    var r = 10;
    for (var i = 0; i < r; i++) {
        var line = '';
        var number = 1;

        // Membuat spasi untuk membentuk segitiga
        for (var j = 0; j < r - i - 1; j++) {
            line += '  ';
        }

        // Mengisi setiap elemen dalam baris
        for (var k = 0; k <= i; k++) {
            if (k > 0) {
                number = number * (i - k + 1) / k;
            }
            line += number + '  ';
        }

        // Menampilkan baris dalam console dan di dalam HTML
        console.log(line);
        // document.write(line + '<br>');
    }
// }

// Memanggil fungsi untuk membuat Segitiga Pascal dengan 5 baris
// generatePascalTriangle(5);