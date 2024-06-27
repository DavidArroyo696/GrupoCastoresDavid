import React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <h1>Grupo Castores</h1>
      {user && (
        <>
          <span>Welcome, {user.nombre}</span>
          <Button color="error" onClick={onLogout} variant="outlined" startIcon={<LogoutIcon />}>
          Logout
      </Button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
