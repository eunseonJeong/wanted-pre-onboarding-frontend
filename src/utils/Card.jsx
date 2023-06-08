import React, { useState } from 'react';
import { deleteTodo, updateTodo } from '../api/todo';

export default function Card({ todo, todoList, setTodoList }) {
  const [isCompleted, setIsCompletedx] = useState(false);

  const onChageHandler = (e) => {
    setIsCompletedx(e.target.value);
  };

  //수정하기 버튼
  const onfixHandler = async (e) => {
    const newTodo = {
      ...todo,
      // isCompleted: !todo.isCompleted,
    };
    updateTodo(newTodo)
      .then((res) => {
        console.log('updateTodo:', res);
        alert('수정완료되었습니다.');
      })
      .catch((e) => {
        console.log(e);
        alert('수정에 실패했습니다.');
      });

    const todoId = todo.id;
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return newTodo;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  //삭제하기 버튼
  //새로고침하면 기능 작동 -> 렌더링 문제
  const ondeleteHandler = () => {
    deleteTodo(todo.id)
      .then((res) => {
        console.log(res);
        alert('삭제를 완료했습니다.');
        const deleteTodoList = todoList.filter((item) => item.id !== todo.id);
        setTodoList(deleteTodoList);
      })
      .catch((e) => {
        console.log(e);
        alert('삭제를 실패했습니다.');
      });
  };

  return (
    <>
      {isCompleted ? (
        <li>
          <label>
            <input type="checkbox" />
            <span>{todo.todo}</span>
          </label>
          {/* 인풋 만들어! */}
          <input type="text" value={isCompleted} onChange={onChageHandler} />
          <button data-testid="modify-button" onClick={onfixHandler}>
            제출
          </button>
          <button data-testid="delete-button" onClick={ondeleteHandler}>
            삭제
          </button>
        </li>
      ) : (
        <li>
          <label>
            <input type="checkbox" />
            <span>{todo.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={onfixHandler}>
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
