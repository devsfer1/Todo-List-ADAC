import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, OpenCreateTodo } from './styles';


const Todos: React.FC = () => {

  return (
    <>
      <Container>
        <Title>Todo List</Title>
          <Link to ="/createtodo">
          <OpenCreateTodo>
            +
          </OpenCreateTodo>
          </Link>
      </Container>
    </>
  )
}

export default Todos