import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { token } from '../api/api';

export default function Home() {
  //로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  //로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
  //로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요
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
