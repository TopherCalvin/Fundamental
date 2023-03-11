let str = new String("abc"); // cara 1 membuat string
let str2 = "ayam goreng"; //cara 2 membuat string

console.log(str);
console.log(str2);
console.log(str2.charAt(1)); // karakter index ke-1
console.log(str2.length); //string punya length untuk menghitung semua karakter dalam string termasuk spasi
console.log(str2.includes("ayam")); //ada "ayam" di dalam "ayam goreng" return true/false
//contoh
if (str2.includes("ayam")) console.log("ada ayam di dalam variabel ini");

console.log(str2.indexOf("y"));
//mencari index per awal karakter dari search string ex:   ayam => 'a'
//tetapi apabila search string tidak terdapat di string maka return -1
//index of selalu yang pertama dari search string
if (str2.indexOf("kucing") == -1)
  console.log("ga ada kucing dalam variabel itu");
else console.log("isi search string terdapat di dalam variabel");

console.log(str2.lastIndexOf("a"));
//kebalikan indexOff membaca dari kanan ke kiri

console.log(str2.slice(0, 4));
//start dari 0 dan banyak karakter(4)
//index 0 = a. 4= a, y, a, m

console.log(str2.replace(/ayam/g, "kucing")); // replace all ayam to kucing
