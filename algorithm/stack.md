stack


// 데이터를 쌓아서 관리하는 구조(세로) 후입선출(가장 늦게 들어온 데이터가 가장 먼저 나간다!) // arr.push, arr.pop


arr.pop()   // 맨 뒤에 값을 꺼낸다
arr.push()  //  맨 뒤에 값을 삽입한다


class Stack {
  constructor(){
    this.arr = []; // 연결리스트로 구현할 수도 있지만, 지금 배우지 않았기에 배열로 구현합니다.
    this.length = 0;
  }

  push(data){
    this.arr.push(data);
    this.length += 1;
  }

  pop(index){
    if (this.length === 0){
      return
    }
    if (index > this.arr.length - 1){
      this.length -= 1
      return this.arr.pop()
    }
    let result = this.arr.splice(index, 1)
    this.length -= 1
    return result
  }

  empty(){
    if (this.length === 0){
      return 1
    } else {
      return 0
    }
  }

  top(){
    return this.arr[this.length - 1]
  }

  bottom(){
    return this.arr[0]
  }

  display(){
    return this.arr
  }
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.display()
