import React, { useEffect, useState } from 'react';
import { Input } from '../componets/Input';
import Button from '../componets/Button';
import { useNavigate } from 'react-router-dom';
import { createTodo, getTodo } from '../api/todo';
import { token } from '../api/api';

export default function AddTodo({ todoList, setTodoList }) {
  const [content, setContent] = useState('');

  const navi = useNavigate();

  useEffect(() => {
    if (token) {
      getTodo()
        .then((res) => {
          setTodoList(res.data);
        })
        .catch((e) => {
          console.log(e);
          alert('리스트 조회에 실패했습니다.');
        });
    } else {
      navi('/signin');
    }
  }, [token]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createTodo(content)
      .then((res) => {
        console.log(res);
        alert('추가되었습니다.');
        setTodoList([...todoList, res.data]);
        setContent('');
      })
      .catch((e) => {
        console.log(e);
        alert('다시 등록이 필요합니다.');
      });
  };
  return (
    <>
      <Input
        data-testid="new-todo-input"
        required
        type="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요."
      />
      <Button
        w="70px"
        h="40px"
        data-testid="new-todo-add-button"
        onClick={onSubmitHandler}
      >
        추가
      </Button>
    </>
  );
}
