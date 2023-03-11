let bool1 = true;
let bool2 = false;

console.log(bool2.valueOf());
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean({})); //true
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(-1)); //true
console.log(Boolean([])); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(undefined) == Boolean(null)); //true
console.log(false == Boolean(null));
console.log("0"); //true
console.log("false"); //true
console.log(false); //false
