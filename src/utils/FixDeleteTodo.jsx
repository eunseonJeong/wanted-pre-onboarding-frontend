import React, { useState } from 'react';
import { deleteTodo, updateTodo } from '../api/todo';
import Button from '../componets/Button';
import styled from 'styled-components';
import TodoItem from '../componets/TodoItem';

export default function FixDeleteTodo({ todo, todoList, setTodoList }) {
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
    <TodoListBlock>
      {isCompleted ? (
        <li>
          <label>
            <input type="checkbox" />
            <TodoItem text={todo.todo} done={true} />
          </label>
          <input
            data-testid="modify-input"
            type="text"
            value={fixTodo}
            onChange={onFixChageHandler}
          />
          <Button data-testid="submit-button" onClick={onfixHandler}>
            제출
          </Button>
          <Button data-testid="cancel-button" onClick={onRestoreHandler}>
            취소
          </Button>
        </li>
      ) : (
        <li>
          <label>
            <input type="checkbox" />
            <span>{todo.todo}</span>
          </label>
          <Button data-testid="modify-button" onClick={onRestoreHandler}>
            수정
          </Button>
          <Button data-testid="delete-button" onClick={ondeleteHandler}>
            삭제
          </Button>
        </li>
      )}
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
