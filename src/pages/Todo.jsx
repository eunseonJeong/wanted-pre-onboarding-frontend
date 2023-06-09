import React, { useEffect, useState } from 'react';
import Card from '../utils/Card';
import { createTodo, getTodo } from '../api/todo';
import Button from '../componets/Button';
import { Input } from '../componets/Input';
import Template from '../componets/Template';
import { token } from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
  const [content, setContent] = useState('');
  const [todoList, setTodoList] = useState([]);

  const navi = useNavigate();

  useEffect(() => {
    if (!token) {
      navi('/');
    }
    getTodo()
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((e) => {
        console.log(e);
        // alert('리스트 조회에 실패했습니다.');
      });
  }, []);

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
    <Template>
      <h1>TODOLIST</h1>
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
      <br />
      {todoList.map((item) => (
        <div key={item.id}>
          <Card todo={item} todoList={todoList} setTodoList={setTodoList} />
        </div>
      ))}
    </Template>
  );
}
