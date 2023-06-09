import { api } from './api';

export const SigninAuth = async (email, password) => {
  try {
    const response = await api.post('/auth/signin', {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const SignupAuth = async (email, password) => {
  try {
    const response = await api.post('/auth/signup', {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
////////////////////////////////CRUD////////////////////////////////
export const createTodo = async (todo) => {
  try {
    const res = await api.post('/todos', { todo });
    return res;
  } catch (e) {
    throw e;
  }
};

export const getTodo = async () => {
  try {
    const res = await api.get('/todos');
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
////////////////////////////////CRUD////////////////////////////////
