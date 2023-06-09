import React, { useState } from 'react';
import FixDeleteTodo from '../utils/FixDeleteTodo';
import Template from '../componets/Template';
import AddTodo from '../utils/AddTodo';

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  return (
    <Template>
      <h1>TODOLIST</h1>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />

      <br />

      {todoList.map((item) => (
        <div key={item.id}>
          <FixDeleteTodo
            todo={item}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        </div>
      ))}
    </Template>
  );
}
