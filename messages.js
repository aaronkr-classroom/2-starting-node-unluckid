// numbers.js
"use strict";

// @TODO: 10개의 숫자로 배열 만들기
let numbers= [1,2,3,4,5,6,7,8,9,10];
// @TODO: printNumbers 함수를 만들어 주세요.
let printNumbers;
printNumbers= function(numbers) {
  for (let count = 0; count<numbers.length; count++){
  console.log(numbers[count]);
    }
};
printNumbers(numbers);




// 숙제 체크 테스트에 필요함
module.exports = printMsgs;
