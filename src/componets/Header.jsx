import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <>
      <span onClick={onClcikHandler}>Home</span>
      <span onClick={onSignUpHandler}>SignUp</span>
      <span onClick={onSignInHandler}>SignIn</span>
    </>
  );
}
