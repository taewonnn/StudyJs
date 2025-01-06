// Partial 
// 기존 타입 중 부분적으로 허용하고 싶을 떄,

{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low'
  };

  // too update 함수
  function updateTodo(todo : ToDo, filedsToUpdate: Partial<ToDo>) {
    // todo 타입 중에 있는 것들 중에서만 받음
    return {...todo, filedsToUpdate};
  }

  const todo :ToDo = {
    title: 'learn TypeScript',
    description: 'study hard!!!',
    label: 'study',
    priority: 'high'
  }

  const updated = updateTodo(todo, {priority: 'low'});
  console.log(updated);

}