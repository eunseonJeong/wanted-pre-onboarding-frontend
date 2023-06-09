import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navi = useNavigate();
  return (
    <div>
      <div>찾을 수 없는 페이지입니다.</div>
      <button onClick={() => navi('/todo')}>홈으로 이동</button>
    </div>
  );
}
