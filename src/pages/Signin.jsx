import React from 'react';

export default function Signin() {
  //유효성 검사 이메일:@ 포함, 비밀번호: 8자 이상,
  //입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요
  //회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

  return (
    <>
      <h3>회원가입 페이지</h3>
      email:
      <input data-testid="email-input" />
      password:
      <input data-testid="password-input" />
      <button data-testid="signup-button">회원가입</button>
    </>
  );
}
