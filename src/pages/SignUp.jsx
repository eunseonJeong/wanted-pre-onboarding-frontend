import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidCheck from '../hook/useValidCheck';
import { SignupAuth } from '../api/todo';
import { Input } from '../componets/Input';
import Button from '../componets/Button';
import Template from '../componets/Template';
import styled from 'styled-components';
import useTokenCheck from '../hook/useTokenCheck';

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
    <Template>
      <StForm onSubmit={onSubmitHandler}>
        <h3>회원가입 페이지</h3>
        <span>email</span>
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
        <Button w="50%" data-testid="signup-button" disabled={!isFormValid()}>
          회원가입
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
