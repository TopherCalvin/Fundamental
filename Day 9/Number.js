//Number

let angka = 10000;

Infinity;
let inf = Infinity; //angka terbesar dalam JavaScript
let mininf = -Infinity; //angka terkecil dalam JavaSript

let strNumber = angka.toString(); //cara 1 merubah angka jadi string
let strNumber2 = angka + "";

console.log(angka.toFixed(2)); //decimal
console.log(angka.toLocaleString("id-ID")); //currency
console.log(angka.toExponential()); //eksponen

let eks = angka.toExponential();
console.log(typeof eks);

console.log(100000000000000000000000000 > inf);

console.log(strNumber); // string number

console.log(typeof strNumber2); // string number

console.log(3 + 2);
console.log(angka++); //angka =+ postfix
console.log((angka += 1)); // angka += 1 prefix
