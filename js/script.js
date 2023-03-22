const text = "Hi, it's not SPAM, you can win million!";
const baned1 = "spam";
const baned2 = "million";

const normalized = text.toLocaleLowerCase(); // привів text до lower case
console.log(normalized); // результат

console.log(normalized.includes(baned1)); //провірив normalized на includes (baned)
console.log(normalized.includes(baned2));

// console.log(text.includes(baned1));
// console.log(text.includes(baned2));

// console.log(text.toLocaleLowerCase().includes(baned1));
// console.log(text.toLocaleLowerCase().includes(baned2));
