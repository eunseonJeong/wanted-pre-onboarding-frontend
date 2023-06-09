import React, { useState } from 'react';
import { deleteTodo, updateTodo } from '../api/todo';

export default function Card({ todo, todoList, setTodoList }) {
  const [isCompleted, setIsCompletedx] = useState(false);
  const [fixTodo, setFixTodo] = useState(todo.todo);

  //수정하기 버튼
  const onfixHandler = async () => {
    const newTodo = {
      ...todo,
      todo: fixTodo,
    };

    await updateTodo(newTodo)
      .then((res) => {
        alert('수정완료되었습니다.');
        const fixTodoList = todoList.map((item) => {
          if (item.id === newTodo.id) {
            return newTodo;
          }
          return item;
        });
        setTodoList(fixTodoList);
      })
      .catch((e) => {
        alert('수정에 실패했습니다.');
      });
    setIsCompletedx((isCompleted) => !isCompleted);
  };

  const onFixChageHandler = (e) => {
    const newTodo = {
      ...todo,
      todo: e.target.value,
    };
    setFixTodo(e.target.value);
    updateTodo(newTodo);
  };

  //삭제하기 버튼
  const ondeleteHandler = () => {
    deleteTodo(todo.id)
      .then((res) => {
        alert('삭제를 완료했습니다.');
        const deleteTodoList = todoList.filter((item) => item.id !== todo.id);
        setTodoList(deleteTodoList);
      })
      .catch((e) => {
        alert('삭제를 실패했습니다.');
      });
  };

  // 취소하기 & 버튼
  const onRestoreHandler = () => {
    setIsCompletedx((isCompleted) => !isCompleted);
  };

  return (
    <>
      {isCompleted ? (
        <li>
          <label>
            <input type="checkbox" />
            <span>{todo.todo}</span>
          </label>
          <input
            data-testid="modify-input"
            type="text"
            value={fixTodo}
            onChange={onFixChageHandler}
          />
          <button data-testid="submit-button" onClick={onfixHandler}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={onRestoreHandler}>
            취소
          </button>
        </li>
      ) : (
        <li>
          <label>
            <input type="checkbox" />
            <span>{todo.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={onRestoreHandler}>
            수정
          </button>
          <button data-testid="delete-button" onClick={ondeleteHandler}>
            삭제
          </button>
        </li>
      )}
    </>
  );
}
