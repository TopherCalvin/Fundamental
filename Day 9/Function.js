let f1 = (parameter) => {
  //expression
};
function f2(parameter) {
  //function
  return [];
}
console.log(typeof f2());
function recursive(param) {
  console.log(param);
  return recursive(param);
}

function recur(par, sum = 0) {
  sum += par;
  if (par > 0) {
    return recur(par - 1, sum);
  } else {
    return sum;
  }
}
console.log(recur(4));

() =>
  //arrow auto return
  () => {
    console.log("asd");
    return 100;
  }; // callback manual return
