// jshint esversion: 6
//Req. A
let revWords1 = str => {
  let result = "";
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return result;
};
console.log(revWords1("Thurs"));

//

//Req. B

//Req. C
let revWords3 = str => {
  let arr = str.split("");
  let result = "";
  for (char of arr) {
    result = char + result;
  }
  return result;
};

console.log(revWords3("Thurs"));

//XC
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
