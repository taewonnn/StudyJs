// readonly

{

  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo : Readonly<ToDo>) {
    // todo.title = 'jaja'; //  읽기 전용 속성으로 title 할당 불가 에러
    
  }
}