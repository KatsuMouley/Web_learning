
//while loop
let iw = 0;
while (iw <= 100) {
    console.log(iw, "\n");
    iw++;
}
console.log("Terminou um loop while\n");

//do while loop
do {

} while (condition);

//for loop
for (let index = 0; index <= 100; index++) {
    console.log(index, "index\n");
}
console.log("Terminou um loop for\n");
let RandomNumber = 0;
while (RandomNumber <= 0.5) {
    RandomNumber = Math.random();
}
console.log("Terminou um loop while\n");

//looping through an array
const ToDoList = ['TodoList', 'Wash dishes', 'Clean House'];

for (let i = 0; i < ToDoList.length; i++) {
    const value = ToDoList[i];
    console.log(value);
}
console.log("Terminou um loop while\n");
//The accumulator pattern
const Nums = [1, 1, 3];
//The accumulator variable
let total = 0;

for (let i = 0; i < Nums.length; i++) {
    const num = Nums[i];
    total += num;
}
console.log(total);
console.log("Terminou um loop while\n");

//Arrays can also be the accumulator variable
const Nums = [1, 1, 3];
const NumsDoubled = [];

for (let i = 0; i < Nums.length; i++) {
    const num = Nums[i];
    NumsDoubled.push(num * 2);
}
console.log(NumsDoubled);