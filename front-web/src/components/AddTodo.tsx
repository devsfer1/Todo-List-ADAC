import React, { useState } from 'react';

import { Form, FormItem, FormInput, FormBtn } from './AddTodoStyle';

type Props = { 
  saveTodo: (e: React.FormEvent, formData: TodoInterface | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<TodoInterface | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <Form onSubmit={(e) => saveTodo(e, formData)}>
      <FormItem>
            <FormInput onChange={handleForm} type='text' id='name' placeholder='Digite sua tarefa'></FormInput>
      </FormItem>
            <FormItem>
              <FormInput onChange={handleForm} type='text' id='description' placeholder='Digite a descrição da sua tarefa'></FormInput>
            </FormItem>
            <FormBtn disabled={formData === undefined ? true: false}>Adicionar Tarefa</FormBtn>
    </Form>
  )
}

export default AddTodo