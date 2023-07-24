// Em "privateRoutes.js"
'use client'
import { useRouter } from 'next/navigation';
import { useCheckUserAuthenticated } from '@/app/functions/check-user-authenticated';
import { useEffect } from 'react';
import { App_Routes } from '@/constants/app-routes';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();

  const { tokenValido, loading } = useCheckUserAuthenticated();

  useEffect(() => {
    console.log(tokenValido + ' auth');
    if (!loading && !tokenValido) {
      push(App_Routes.public.login);
    }
  }, [tokenValido, loading, push]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {!tokenValido && null}
      {tokenValido && children}
    </>
  );
}

export default PrivateRoute;
