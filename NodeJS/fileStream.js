var fs = require('fs')

fs.readFile('dosya.txt', "utf-8", function (hata, data) {
    if (hata) {
        throw hata;
    }
    // console.log(data.toString());
    console.log(data);
})

fs.writeFile('dosya2.txt', "Obje Buraya Geçilir", function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("Yazma Başarılı")
})

fs.appendFile('dosya2.txt', "Obje Buraya Geçilir", function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("Yazma Başarılı")
})

fs.unlink('dosya2.txt', function (hata) {
    if (hata) {
        throw hata;
    }
    console.log("Silme Başarılı")
})

