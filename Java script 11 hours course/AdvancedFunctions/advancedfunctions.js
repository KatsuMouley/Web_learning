
//lesson 12
//We need to declare the function
/*
declaring the function in this way give us the advantage that we don't
need to worry where we're declaring the function, it's called hoisting
*/
hello("before the func");

function hello(word) {
    console.log("hello, we're learning more about functions", word);
}
//So then we can call it
hello("after the func");


//functions can also be values
let value = 2;

const function1 =
    //this is called anonymous function, functions without name;
    function () { console.log("Hello2"); }
    ;

console.log(function1);
console.log(typeof function1);
function1();

//which implies that functions can also be objects
const object1 = {
    num: 2,
    func: function () {
        console.log("hello3");
    }
}
object1.func();



//which implies that functions can also be used as param
function FunctionParam(param) {
    param();
}
FunctionParam(
    function () {
        console.log("Hello 4");
    }
)

//settimeout cria um timer que apos um tempo determinado em milisegundo chama uma função
setTimeout(function () {
    console.log('Timeout');
    console.log('Timeout2');
}, 2000)
//Asynchronous code, This means that the computer won't wait for a line to finish before going to the next line.
//So which implies that this set timeout will be displayed after 10 secondes, but the the codes after him won't wait for his execution
//whoever Synchronous code is the opposite, this implies that the computer will wait for one line to finish before going to the next line
//usually the code that we normally write is synchronous code
//the only time that it isn't, is when we use certain js features
//for example, setTimeout( function();, timer);
//the advantage of this is that we can run other codes while the timeout is running


//setInterval will keep running the function after a certain period of time
setInterval(function () {
    console.log('Interval');
}, 3000);

//forEach() is a method in js for looping through an array
console.log('forEach() method');
[
    'Hello',
    'Supp',
    'Hi'
].forEach(function (value, index) {
    if (value === 'Supp') {
        return;
    }
    console.log(value);//the value
    console.log(index);//the position of the value in the array
});



const regularFunction = function (param, param2) {
    console.log('Normal Function');
    return 5;
};

//Arrowfunctions is a short way to write functions
const arrowFunction = (param, param2) => {
    console.log('ArrowFunction');
    return 5;
};
arrowFunction();

//ArrowFunctions have shortcuts
const oneParam = param => {
    console.log(param + 1);
};
oneParam(2);

const oneline = () => 2 + 3;
console.log(oneline());

console.log('forEach() method with arrow function');
[
    'Hello=>',
    'Supp',
    'Hi=>'
].forEach((value, index) => {
    if (value === 'Supp') {
        return;
    }
    console.log(value);//the value
    console.log(index);//the position of the value in the array
});

const object2 = {
    method: () => {

    },
    method() {

    }
};

const buttonElement = document.querySelector('.js-button');
//.addEventListener(event, function); this is a different way to do events
//we can add multiple eventlistener
const EventListener = () => {
    console.log('click');
}
buttonElement.addEventListener('click', EventListener);

buttonElement.removeEventListener('click', EventListener);

buttonElement.addEventListener('click', () => {
    console.log('click2');
});


console.log('Filter method');
console.log([1, -3, 5].filter((value, index) => {
    /*if (value >= 0) {
        return true;
    } else {
        return false;
    }*/
    return value >= 0;
}));
console.log('map method');

console.log(
    [1, 1, 3].map((value, index) => {
        return value * 2;
    }));

console.log('map method with shortcuts');
console.log([1, 1, 3].map(value => value * 2));


//Closure, if a function has access to a value it will always have access to that value
