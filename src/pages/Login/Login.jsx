import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { loginWithGoogle, error: authError, loading } = useAuthentication();
  const navigate = useNavigate(); 

  const handlerSubmit = async (e) => {
    e.preventDefault();

    setError('');
    const user = {
      email,
      password,
    };

   
  };

  const handleGoogleLogin = async () => {
    const user = await loginWithGoogle();
    if (user) {
      navigate('/home');   
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça login em nossa plataforma de desenvolvedores</p>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && <button className="btn" disabled>Aguarde... </button>}
        {error && <p>{error}</p>}
      </form>
      <hr />
      <button className="btn" onClick={handleGoogleLogin}>
        Entrar com Google
      </button>
    </div>
  );
};

export default Login;