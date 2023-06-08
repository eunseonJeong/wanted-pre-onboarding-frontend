import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';

export const SigninAuth = async (email, password) => {
  try {
    const response = await api.post('/auth/signin', {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default function Signin() {
  //로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요 >ok

  //로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  //응답받은 JWT는 로컬 스토리지에 저장해주세요

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    SigninAuth(sign.email, sign.password)
      .then((res) => {
        console.log('login:', res);
        alert('로그인되었습니다.');
        localStorage.setItem('accessToken', res.data.access_token);
        navi('/todo');
      })
      .catch((e) => {
        console.log(e);
        alert('다시 로그인해주세요.');
      });
  };

  return (
    <>
      <h3>로그인 페이지</h3>
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
        <button data-testid="signin-button">로그인</button>
      </form>
    </>
  );
}
