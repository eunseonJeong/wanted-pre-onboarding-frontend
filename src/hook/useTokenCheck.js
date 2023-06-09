import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { token } from '../api/api';

export default function useTokenCheck() {
  const navi = useNavigate();

  useEffect(() => {
    if (token) {
      navi('/');
    }
  }, [token, navi]);

  return;
}
