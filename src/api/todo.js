import { api } from './api';

export const createTodo = async (todo) => {
  try {
    const res = await api.post('/todos', { todo });
    console.log('createTodo:', res);
    return res;
  } catch (e) {
    throw e;
  }
};

export const getTodo = async () => {
  try {
    const res = await api.get('/todos');
    console.log('getTodo:', res);
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (todo) => {
  try {
    const res = await api.put(`/todos/${todo.id}`, {
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    });
    return res;
  } catch (e) {
    throw e;
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await api.delete(`/todos/${id}`);
    return res;
  } catch (e) {
    throw e;
  }
};
