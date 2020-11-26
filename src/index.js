/**
 * const,letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

//constは上書き再宣言不可能
// val3 = "constの上書き";
// const val3 = "constの再宣言";

//constで定義したプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };
// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log(val4)

//constで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃえぇ";
// const age = 28;

//「私の名前はじゃけぇです。年齢は28歳です。」

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age +"です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str
// }
// console.log(func1("fun1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("funce2です"));

//省略の形
// const func2 = (str) => str;

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(10, 20));
