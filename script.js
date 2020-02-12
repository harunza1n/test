// var x = "halo Dunia"

// console.log(x.length)
// console.log(x.indexOf("Dunia"))
// console.log(x.substr(5, 3))
// console.log(x.slice(1, 8))
// console.log(x.split(""))
// console.log(x.replace(/ha/g, "mi"))
// console.log(x.replace("ha", "mi"))

// solve it 1
// var x,y,z,w
// x=4
// y=3
// z=2
// w = (((x+y)*z)/(x*y)) 
// console.log(Math.pow(w, z))

// solve it 2
// var angka = parseInt(prompt("Silahkan masukan angka berapapun ?"))
// var result = angka * angka
// alert("Kuadrat dari " + angka + " = " + result)
// console.log(result)

// solve it 4
// 485 hari.
// Nyatakan dalam tahun, bulan, minggu dan hari.
// *1 bulan = 30 hari, 1 tahun = 360 hari.
// var input = parseInt(prompt("Silahkan masukan jumlah hari ?"))
// var input = 485
// var tahun = Math.floor(input / 360)
// var sisaTahun = input % 360
// var bulan = Math.floor(sisaTahun / 30)
// var sisaBulan = bulan % 30
// var minggu = Math.floor(sisaBulan / 7)
// var hari = sisaBulan % 7
// alert(input + " adalah : \n\n" + tahun + " tahun\n" + bulan + " bulan\n" + minggu + " minggu\n" + hari + " hari")
// console.log(tahun)
// console.log(bulan)
// console.log(minggu)
// console.log(hari)

// solve it 5
// Saat ini, jumlah usia Andi & Budi = 49 th, dengan rasio Usia Andi & Budi = 0.4.
// Berapa usia Andi & Budi 
// 2 tahun lagi?
// var rasioAndiBudi = 0.4;
// var budi = 49 / (rasioAndiBudi + 1)
// var andi = 49 - budi
// console.log(budi)

// solve it 6
// hari ini tanggal 7-2-2020
// besok tgl 8-2-2020
// kemarin tgl 6-2-2020
// let a = new Date()
// console.log('Hari ini tanggal '+ a.getDate() +'-'+ (a.getMonth() + 1) + '-' + a.getFullYear())
// console.log('Besok tanggal ' + (a.getDate() + 1) + '-' + (a.getMonth() + 1) + '-' + a.getFullYear())
// console.log('Kemarin tanggal ' + (a.getDate() - 1) + '-' + (a.getMonth() + 1) + '-' + a.getFullYear())

// solve it 7
// Buatlah algoritma untuk menghitung karakter tertentu dalam String!
// Misal: “Halo Dunia” memiliki 
// huruf ‘a’ sebanyak 2 buah.
// var huruf = "halo duniaaaaaauuuu"
// console.log(huruf.match(/u/g).length)

// solve it 8
// Jarak mobil A & B = 120 km.
// A berjalan 60km/h dari timur.
// B berjalan 40km/h dari barat.
// A & B start pukul 9 WIB.
// Jam brp A & B bertabrakan? 
// var a, b, c
// a = 60 / 60
// b = 40 / 60
// c = 120

// console.log(a)
// console.log(b)
// console.log(c / (a + b))
// var a = 60
// var b = 40
// var ab = 120
// var time = 9
// var tabrak = (ab / (a + b) * 60)
// var hour = (Math.floor(tabrak / 60))
// var minute = (tabrak % 60)
// console.log("Mobil A & B akan saling bertemu jam " + parseInt(time + hour) + ":" + minute + ".")

// Tampilkan bilangan acak 
// (antara 1-100) di Browser
// document.write(Math.floor(Math.random()*100)+1)
// console.log(Math.floor(Math.random()*100)+1)