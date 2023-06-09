import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTokenCheck from '../hook/useTokenCheck';
import useValidCheck from '../hook/useValidCheck';
import { SigninAuth } from '../api/todo';
import Template from '../componets/Template';
import { Input } from '../componets/Input';
import Button from '../componets/Button';
import styled from 'styled-components';
import { token } from '../api/api';

export default function Signin() {
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
  useEffect(() => {
    if (token) {
      navi('/todo');
    }
  }, [token]);
  useTokenCheck();

  const { isFormValid } = useValidCheck(sign);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    SigninAuth(sign.email, sign.password)
      .then((res) => {
        localStorage.setItem('access_Token', res.data.access_token);
        alert('로그인되었습니다.');
        navi('/todo');
      })
      .catch((e) => {
        console.log(e);
        alert('다시 로그인해주세요.');
      });
  };

  return (
    <Template>
      <StForm onSubmit={onSubmitHandler}>
        <h3>로그인 페이지</h3>
        email
        <Input
          data-testid="email-input"
          type="email"
          value={sign.email}
          onChange={onChangeHandler}
          name="email"
          placeholder="이메일을 입력하세요."
          required
        />
        <span>password</span>
        <Input
          data-testid="password-input"
          type="password"
          value={sign.password}
          onChange={onChangeHandler}
          name="password"
          placeholder="비밀번호를 입력하세요."
          required
        />
        <Button w="50%" data-testid="signin-button" disabled={!isFormValid()}>
          로그인
        </Button>
      </StForm>
    </Template>
  );
}

const StForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
