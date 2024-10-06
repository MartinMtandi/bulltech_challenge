"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Dummy login logic
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('authToken', 'dummyToken');
      router.push('/dashboard'); // Navigate to the dashboard after successful login
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleLogin} style={formStyle} autoComplete="off">
        <h2 style={titleStyle}>Login</h2>
        {error && <p style={errorStyle}>{error}</p>}

        <div style={inputGroupStyle}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

// Add styles here (same as before)
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
} as React.CSSProperties;

const formStyle = {
  padding: '2rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  zIndex: 9,
  position: 'relative',
} as React.CSSProperties;

const inputGroupStyle = {
  marginBottom: '1rem',
} as React.CSSProperties;

const titleStyle = {
    marginBottom: '1rem',
} as React.CSSProperties;

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
} as React.CSSProperties;

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
} as React.CSSProperties;

const errorStyle = {
  color: 'red',
  marginBottom: '1rem',
} as React.CSSProperties;

export default Login;
