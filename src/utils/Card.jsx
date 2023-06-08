import React, { useState } from 'react';
import api from '../api/api';

export default function Card({ todo }) {
  const [fix, setFix] = useState(false);
  const [fixText, setFixText] = useState(todo.text);

  const onChageHandler = (e) => {
    setFixText(e.target.value);
  };

  const onfixHandler = async () => {
    console.log('수정하기 버튼');
    // api 로직
    try {
      // const response = await api.put(`todos/${id}`, { text: fixText });
      // console.log('Response:', response);
      setFix((fix) => !fix);
    } catch (error) {
      console.error(error);
    }
  };

  const ondeleteHandler = () => {
    console.log('삭제 버튼');
  };
  return (
    <>
      {fix ? (
        <li>
          <label>
            <input type="checkbox" />
            <span>TODO 1</span>
          </label>
          {/* 인풋 만들어! */}
          <input type="text" value={fixText} onChange={onChageHandler} />
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
            <span>TODO 2</span>
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
