import axios from 'axios';
import React, { useState } from 'react';
import Card from '../utils/Card';

export default function Todo() {
  const [content, setContent] = useState('');

  const onChageHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const access_token = localStorage.getItem('name');
    try {
      const response = await axios.post('/todos', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log('response:', response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
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

      <Card />
    </>
  );
}
