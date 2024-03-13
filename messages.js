// messages.js
"use strict";

// @TODO: 3개의 문자열 messages 배열 만들어 주세요.
let messages=[];
messages[0] ="안녕";
messages[1] ="하루";
messages[2] ="커피";
// @TODO: messages 배열에서 각 메시지를 인쇄하는 함수를 만들어 주세요.
funtion printMsgs(messages){
  for (let count = 0; count<messages.length; count++){
  console.log(messages[count])}
}
printMsgs(messages);







// 숙제 체크 테스트에 필요함
module.exports = printMsgs;
