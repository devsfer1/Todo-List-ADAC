import React from 'react';

import { Link } from 'react-router-dom';

import { Container, CloseCreateTodo } from './styles';

type Props = TodoProps & {
  updateTodo: (todo: TodoInterface) => void
  deleteTodo: (_id: string) => void
}

const CreateTodo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <>
      <Container>
        <Link to ="/">
          <CloseCreateTodo>
            x
          </CloseCreateTodo>
        </Link>
      </Container>
    </>
  )
}

export default CreateTodo;