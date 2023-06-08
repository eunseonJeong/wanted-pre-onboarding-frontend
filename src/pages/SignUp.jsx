import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  //로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요

  //로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  //응답받은 JWT는 로컬 스토리지에 저장해주세요

  //로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  //로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
  //로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요

  const navi = useNavigate();
  const onClickButtonHandler = () => {
    navi('/todo');
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h3>로그인 페이지</h3>
      email:
      <input data-testid="email-input" />
      password:
      <input data-testid="password-input" />
      <button data-testid="signup-button" onClick={onClickButtonHandler}>
        로그인
      </button>
    </form>
  );
}
