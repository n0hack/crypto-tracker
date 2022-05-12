import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useInternalRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goback() {
        navigate(-1);
      },
      push(path: string) {
        navigate(path);
      },
    };
  }, [navigate]);
}
