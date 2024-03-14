//Arrays are a list of variables

const MyArray = [110, 115, 120];
console.log(MyArray);
console.log(MyArray[0]);
MyArray[0] = 99;
console.log(MyArray);
//Valores que posso por dentro de um Array
[1, 'Hello', true, { name: 'socks' }, [1, 2]]
//Verifica o tipo de valor, neste caso um Array
console.log(typeof [1, 2]);
//Verifica se é um Array
console.log(Array.isArray([1, 2]));
//Mostra o tamanho do Array
console.log(MyArray.length);
//adiciona um valor ao Array1
MyArray.push(125);
console.log(MyArray);
//Remove um valor do Array Array.splice( Por onde começar, a quantidade a ser removida);
MyArray.splice(3, 1);
console.log(MyArray);

const Array1 = [1, 2, 3];
const Array2 = Array1; //Array2 está referenciando Array1
const Array3 = Array1.slice();
Array2.push(9);
console.log(Array1, 'Array1');
console.log(Array2, 'Array2 referenciando array1');
Array3.push(4);
console.log(Array3, 'Array3');

//destructuring an array
const [FirstValue, SecondValue, ThirdValue] = [1, 2, 3];
//FirstValue = 1, SecondValue = 2 and ThirdValue = 3
//We can also use
const DestructureArray = [1, 2, 3];
let firstnumber = DestructureArray[0];
let secondnumber = DestructureArray[1];
let thirdnumber = DestructureArray[2];

for (let i = 0; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
    if (i === 8) {
        console.log("BREAK HAHA");
        break;
    }
}
console.log("------------------");
let i = 0;
while (i <= 10) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
console.log("------------------");

function doubledArray(nums) {
    let numsDoubled = [];
    console.log(nums, "valor original");
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numsDoubled.push(num * 2);
    }
    return numsDoubled
};
console.log(doubledArray([1, 1, 2]), "valor multiplicado");
console.log(doubledArray([9, 0, 4]), "valor multiplicado");

console.log("------------------");