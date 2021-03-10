import React from 'react';

import { TodoContainer, DelBtn, CheckBtn, TodoName, Todo } from './TodoItemStyle';

type Props = TodoProps & {
    updateTodo: (todo: TodoInterface) => void
    deleteTodo: (_id: string) => void
}

const TodoItem: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <TodoContainer>
      <DelBtn onClick={() => deleteTodo(todo._id)}>X</DelBtn>
        <Todo>
          <TodoName>{todo.name}</TodoName>
          <span>{todo.description}</span>
        </Todo>    
        <CheckBtn onClick={() => updateTodo(todo)}>✔</CheckBtn>
    </TodoContainer>
  )
}

export default TodoItem