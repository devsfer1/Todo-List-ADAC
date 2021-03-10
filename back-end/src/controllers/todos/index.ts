import { Response, Request } from 'express';

import  { TodoInterface }  from './../../types/todo';
import Todo from '../../models/todo'

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: TodoInterface[] = await Todo.find();
    res.status(200).json({ todos })
  } catch(err) {
    console.log(err.message);
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<TodoInterface, "name" | "description" | "status">

    const todo: TodoInterface = new Todo({
      name: body.name,
      description: body.description,
      status: body.status
    })

    console.log(todo.name)

    const newTodo: TodoInterface = await todo.save();
    const allTodos: TodoInterface[] = await Todo.find();

    res.status(201).json({ message: 'Tarefa Adicionada', todo: newTodo, todos: allTodos })
  } catch (err) {
    console.log(err.message);
  }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateTodo: TodoInterface | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body  
    )
    const allTodos: TodoInterface[] = await Todo.find()
    res.status(200).json({
      message: 'Tarefa Atualizada',
      todo: updateTodo,
      todos: allTodos
    })
  } catch (err) {
    console.log(err.message);
  }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: TodoInterface | null = await Todo.findByIdAndRemove(
      req.params.id
    )
    const allTodos: TodoInterface[] = await Todo.find();
    res.status(200).json({
      message: 'Tarefa Deletada',
      todo: deleteTodo,
      todos: allTodos,
    })
  } catch (err) {
    console.log(err.message);
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo }

