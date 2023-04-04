// const text = "Hi, it's not SPAM, you can win million!";
// const baned1 = "spam";
// const baned2 = "million";

// const normalized = text.toLocaleLowerCase(); // привів text до lower case
// console.log(normalized); // результат

// console.log(normalized.includes(baned1)); //провірив normalized на includes (baned)
// console.log(normalized.includes(baned2));

// console.log(text.includes(baned1));
// console.log(text.includes(baned2));

// console.log(text.toLocaleLowerCase().includes(baned1));
// console.log(text.toLocaleLowerCase().includes(baned2));

// const clients = ["Mango", "Ajax", "Poly", "Moly", "Rat", "Migel"];

// for (const client of clients) {
//   console.log(client);
// }
//Перебирає кожен елемент масиву

// const string = "script";

// for (const character of string) {
//   console.log(character);
// }
//перебирає кожну літеру string

// const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
// console.log(lorem);
// const newLorem = lorem.split(" ");
// console.log(newLorem);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly"));
// console.log(clients.indexOf("Kiwi"));
// console.log(clients.indexOf("Rat"));

// const clientos = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clientos.includes("Poly"));
// console.log(clientos.includes("Monkong"));
// console.log(clientos.includes("Ajax"));

// if (clientos.includes("Poly")) {
//   console.log("We found this bitch!");
// } else {
//   console.log("This woman is disapared!");
// }
// const numbers = ["one"];

// numbers.push("two");
// console.log(numbers);

// numbers.push("three");
// console.log(numbers);

// numbers.push("four");
// console.log(numbers);

// numbers.push("five");
// console.log(numbers);

// const numbers = ["one", "two", "three", "four", "five"];

// console.log(numbers.pop()); // "five"
// console.log(numbers); // ['one', 'two', 'three', 'four']

// console.log(numbers.pop()); // "four"
// console.log(numbers); // ['one', 'two', 'three']

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3));

// const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// function multiply(x, y, z) {
//   console.log("before return");
//   return x * y * z;
//   console.log("after return");
// }
// let result = multiply(2, 3, 5);
// console.log(result);

// result = multiply(4, 8, 12);
// console.log(result);
// result = multiply(17, 6, 25);
// console.log(result);

// const add = function (a, b) {
//   console.log(a);
//   console.log(b);
//   return a + b;
// };
// let result = add(4, 3);
// console.log("result", result);

// let result1 = add(5, 6);
// console.log("result", result1);

// let result2 = add(6, 7);
// console.log("result", result2);

// const sum = function (a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   return a + b + c;
// };
// const result = sum(11, 22, 33);
// console.log("result:", result);

// const salary = function (a, b) {
//   if (a <= b) {
//     return "A менше за B";
//   }
//   return "A біьше за B";
// };
// let price = 10;
// let wallet = 20;
// console.log(salary(price, wallet));

const fnA = function () {
  console.log("is perfomed A");
  fnB();
};
const fnB = function () {
  console.log("is perfomed B");
  fnC();
};
const fnC = function () {
  console.log("is perfomed C");
  fnD();
};
const fnD = function () {
  console.log("is perfomed D");
  fnE();
};
const fnE = function () {
  console.log("is perfomed E");
};

fnA();
