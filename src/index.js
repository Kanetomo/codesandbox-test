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

// 分割代入
// オブジェクトの分割代入
// const myProfile = {
// name: "じゃけぇ",
// age: 28,
// }

// const{ name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列の分割代入
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん!`);
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// 配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// これは参照を別にする→コピー後の値を変更しても元の数字は変化しない

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// 配列をループさせて何かしらの処理をするやり方と
// nameArr.map((name) => console.log(name));

// リターンされた結果に基づいて新しい配列を作成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// const numArr = [1, 2, 3 ,4 ,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

//よく使うやり方
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

/**
 * 三項演算子
 */
// 　可読性の問題で多用してはならないが便利
// 　ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = '1300';
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString(): '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// }
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
