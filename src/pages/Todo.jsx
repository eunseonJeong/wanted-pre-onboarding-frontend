import React, { useState } from 'react';
import Card from '../utils/Card';

export default function Todo() {
  const [content, setContent] = useState('');

  const onChageHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = () => {
    return;
  };

  return (
    <>
      <h1>TODOLIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          required
          type="content"
          value={content}
          onChange={onChageHandler}
          placeholder="내용을 입력하세요."
        />
        <button>확인</button>
      </form>

      <br />
      <Card todo={content} />
    </>
  );
}
