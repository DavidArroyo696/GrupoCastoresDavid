import React, { useState } from 'react';
import { login } from '../controllers/authController';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const user = await login(email);
    if (user) {
      onLogin(user);
    } else {
      alert('Usuario no encontrado');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      
      <InputLabel htmlFor="input-with-icon-adornment">
        Correo electrónico
        </InputLabel>
        <Input 
        type="email"
          id="correo electrónico"
          value={email}
        onChange={(e) => setEmail(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      <Button sx={{marginLeft: '20px'}} onClick={handleLogin} variant="contained" endIcon={<SendIcon />}>
        Login
      </Button>
    </div>
  );
};

export default Login;
