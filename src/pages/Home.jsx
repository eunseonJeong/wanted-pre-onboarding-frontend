import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { token } from '../api/api';

export default function Home() {
  const navi = useNavigate();
  useEffect(() => {
    if (token) {
      navi('/todo');
    } else {
      navi('signin');
    }
  }, []);
  return <div>홈입니다!</div>;
}
