import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTokenCheck from '../hook/useTokenCheck';
import useValidCheck from '../hook/useValidCheck';
import { SignupAuth } from '../api/todo';

export default function Signup() {
  const [sign, setSign] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSign((item) => ({
      ...item,
      [name]: value,
    }));
  };

  const navi = useNavigate();

  useTokenCheck();

  const { isFormValid } = useValidCheck(sign);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    SignupAuth(sign.email, sign.password)
      .then((res) => {
        console.log(res);
        alert('회원가입 완료되었습니다.');
        navi('/signin');
      })
      .catch((e) => {
        console.log(e);
        alert('다시 회원가입해주세요.');
      });
  };

  return (
    <>
      <h3>회원가입 페이지</h3>
      <form onSubmit={onSubmitHandler}>
        email:
        <input
          data-testid="email-input"
          type="email"
          value={sign.email}
          onChange={onChangeHandler}
          name="email"
          placeholder="이메일을 입력하세요."
          required
        />
        password:
        <input
          data-testid="password-input"
          type="password"
          value={sign.password}
          onChange={onChangeHandler}
          name="password"
          placeholder="비밀번호를 입력하세요."
          required
        />
        <button data-testid="signup-button" disabled={!isFormValid()}>
          회원가입
        </button>
      </form>
    </>
  );
}
