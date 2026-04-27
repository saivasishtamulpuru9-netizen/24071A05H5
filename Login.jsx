import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoggedIn(true);
    navigate('/menu');
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Sign in to order your favorite food</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <div>
          <label>Email Address: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#fde047', padding: '10px', cursor: 'pointer', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
