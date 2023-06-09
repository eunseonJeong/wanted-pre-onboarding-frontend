import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { token } from '../api/api';

function useTokenCheck() {
  const navi = useNavigate();
  useEffect(() => {
    if (token) {
      navi('/');
    }
  }, []);
  return;
}
export default useTokenCheck;
