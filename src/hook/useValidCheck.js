export default function useValidCheck(sign) {
  //유효성 검사
  const isEmailValid = (email) => {
    return email.includes('@');
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const isFormValid = () => {
    const { email, password } = sign;
    return isEmailValid(email) && isPasswordValid(password);
  };

  return { isFormValid };
}
