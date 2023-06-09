import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navi = useNavigate();
  const onClcikHandler = () => {
    navi('/');
  };
  const onSignUpHandler = () => {
    navi('/signup');
  };
  const onSignInHandler = () => {
    navi('/signin');
  };
  return (
    <StHeader>
      <span onClick={onClcikHandler}>Home</span>
      <span onClick={onSignUpHandler}>SignUp</span>
      <span onClick={onSignInHandler}>SignIn</span>
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 6vh;
  max-width: 1200px;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  gap: 15px;
`;
