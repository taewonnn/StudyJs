// class
// class = blueprint(청사진)

class User1 {
    // 인스턴스가 만들어질 때 실행되는 코드
    constructor() {
        this.username = "Nico";
    }
    sayHello() {
        console.log("Hello, I'm Nicolas");
    }
}

console.log(User1.username);  // undefined => class를 가져와서 생성을 해야 한다!

const sexyUser = new User1();
const uglyUser = new User1();

console.log(sexyUser.username); // Nico
setTimeout(sexyUser.sayHello, 4000);

sexyUser.sayHello();
uglyUser.sayHello();


class Car {
    // 인스턴스가 만들어질 때 실행되는 코드
    constructor(brand, name, color) {
        this.brand = brand;
        this.name = name;
        this.color = color;
    }
    sayHello() {
        console.log(`My Car is ${this.name}`)
    }
}

// 인스턴스 
const ACar = new Car('kia','stinger','red');
const BCar = new Car('Porsche','Machan', 'white');



class User {
    constructor({username, lastName, email, password}) {
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
    updatePassword(newPassword, currentPassword) {
        if(currentPassword == this.password) {
            this.password = newPassword;
        } else {
            console.log("Can't change password");
        }
    }
}

const sexyUsers = new User({username:'Nicolas', lastName:'Serrano', email:'nico@naver.com', password:'1234'});

sexyUsers.getProfile();
sexyUsers.updatePassword('hello','1234')
console.log(sexyUsers.password) // 'hello'

// Extends - super
class Admin extends User {
    constructor({username, lastName, email, password, superAdmin, isActive}) {
        // 기존 class(User)의 파라미터
        super({username, lastName, email, password});
        this.superAdmin = superAdmin;
        this.isActive = isActive;
    }
    deleteWebsite() {
        console.log('Deleting the whole website');
    }
}

const sexyAdmin = new Admin({username :'taewon', lastName:'park', email:'park@naver.com', password: '54321', superAdmin: true, isActive: true });
console.log(sexyAdmin)



// class 사용 예시 - counter

// index.html
// <body>
    // <span id='count'></span>
    // <button id='add'>+</button>
    // <button id='minus'>-</button>
// </body>


// app.js
class Counter {
    constructor ({initialNumber = 0, counterId, plusId, minusId}) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.counter.innerText = initialNumber;
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();
    }

    addEventListeners() {
        console.log(this) // Counter를 가르킨다.
        this.plusBtn.addEventListener('click', this.increase);  // plusbtn을 클릭한 경우 this는 이 plusbtn의 요소를 보게 된다.
        this.minusBtn.addEventListener('click', this.decrease);
    }

    // 아래처럼 하면 위에 addEventListener 안에 this가 class를 찾지 못함
    // 따라서 화살표 함수로 쓰면 this가 적용이 안되기에 화살표 함수로 해결 가능!

    // increase() {    
    //     console.log(this);
    //     this.count += 1;
    //     this.repaintCount();
    // }

    increase = () => {
        console.log(this) // - > 화살표함수를 사용함으로써 class를 가르킴 
        this.count += 1;
        this.repaintCount();
    }

    // decrease() {
    //     this.count -= 1;
    //     this.repaintCount();
    // }

    decrease = () => {
        this.count -= 1;
        this.repaintCount();
    }

    repaintCount = () =>  {
        this.counter.innerHTML = this.count
    }
}

new Counter({counterId: 'count', plusId: 'plus', minusId: 'minus'});
