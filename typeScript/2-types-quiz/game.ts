/**
 * Let's make a game 🕹
 */




const position = {x: 0, y: 0};

function move(direction : 'up' | 'down' | 'right' | 'left') {
  switch(direction) {
      case: 'up':
        position.y +=1;
        break;
    case 'down': 
      poairion.y -=1;\
      break;
    case 'left' : 
      position.x -= 1;
      break;
    case 'right':
      position.x  x +=1;
      break;)
      
    }
      
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}




