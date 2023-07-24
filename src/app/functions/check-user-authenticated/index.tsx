// Em "check-user-authenticated.js"

import { useEffect, useState } from "react";
import axios from "axios";

export const useCheckUserAuthenticated = () => {
  const [userToken, setToken] = useState('');
  const [tokenValido, setTokenValido] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkToken =() => {
    // Obter o token do usuário do localStorage ou de outra fonte
    const token = localStorage.getItem('token') ?? 'token não encontrado';
    setToken(token);

    // Fazer a requisição usando Fetch
    fetch('http://localhost:3004/verifyToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    })
      .then((response) => {
        if (response.ok) {

          console.log('passou1');
          setTokenValido(true);
        } else {
          console.log('passou2');
        }
      })
      .catch((error) => {
        console.error('Erro na verificação do token:', error);
      })
      .finally(() => {
        setLoading(false); // Indica que a verificação do token foi concluída
      });
  };

  useEffect(() => {
    console.log('oi1');
    checkToken();
  }, []);

  return { tokenValido, loading };
};
