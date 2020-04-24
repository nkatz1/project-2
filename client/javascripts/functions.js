// jshint esversion: 6
//Req. A

let revWords1 = str => {
  let rev = "";
  let answer = [];
  rev = str.split(" ");
  for (var i = 0; i < rev.length; i++) {
    let item = rev[i]
      .split("")
      .reverse()
      .join("");
    answer.push(item);
  }
  return answer.join(" ");
};
console.log(revWords1("happy clam"));

//

//Req. B
let revWords2 = str => {
  let arr = str.split("");
  let result = "";
  arr.forEach(char => {
    result = char + result;
  });

  return result;
};
console.log(revWords2("Delta Echo"));

//Req. C
let revWords3 = str => {
  let arr = str.split("");
  let result = "";
  for (char of arr) {
    result = char + result;
  }
  revWords3.reverse();
  return result;
};

console.log(revWords3("Delta Echo"));

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
