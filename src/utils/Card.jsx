import React from 'react';

export default function Card() {
  const onfixHandler = () => {
    console.log('수정하기 버튼');
  };

  const ondeleteHandler = () => {
    console.log('삭제 버튼');
  };
  return (
    <>
      <li>
        <label>
          <input type="checkbox" />
          <span>TODO 1</span>
        </label>
        <button data-testid="modify-button" onClick={onfixHandler}>
          수정
        </button>
        <button data-testid="delete-button" onClick={ondeleteHandler}>
          삭제
        </button>
      </li>
    </>
  );
}
