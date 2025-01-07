// this
// 누가 호출했는지에 따라 동적으로 변함

console.log(this); // window

function simpleFunc() {
    console.log(this); 
}

// global에서 함수를 호출하는것은 window에서 호출하는것과 동일
window.simpleFunc(); // window
simpleFunc(); // window

console.clear();

class Counter {
    count = 0;
    increase = function() {
        console.log(this); // Counter {count: 0, increase: ƒ}
    }
}

const counter = new Counter;
counter.increase();


const caller = counter.increase;
caller(); // undefined

// binding 
const caller2 = counter.increase.bind(counter);
caller2(); // Counter








// tip
function helloWorld() {
    console.log('hello')
}

window.helloWorld(); // hello

// const / let으로 정의 시 window에 등록되지 못함
const ellie = 'ellie';
let taewon = 'taewon';

window.ellie; // undefiend
window.taewon; // undefined


// var는 가능함
var badVar = 'bad';
window.badVar // 'bad'




class Bob {
}

const bob = new Bob();
bob.run = counter.increase;

bob.run(); // Bob