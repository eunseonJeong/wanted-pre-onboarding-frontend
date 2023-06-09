import React, { useState } from 'react';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import useTokenCheck from '../hook/useTokenCheck';
import useValidCheck from '../hook/useValidCheck';

export const SignupAuth = async (email, password) => {
  try {
    const response = await api.post('/auth/signup', {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export default function Signup() {
  //유효성 검사 이메일:@ 포함, 비밀번호: 8자 이상, >ok
  //입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요 >ok
  //회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요 >ok

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
