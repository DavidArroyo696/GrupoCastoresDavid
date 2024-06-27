import React, { useState } from 'react';
import Login from './components/Login';
import Inventory from './components/Inventory';
import Historical from './components/Historical';
import SalidaProducto from './components/SalidaProducto';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login');

  const handleLogin = (user) => {
    setUser(user);
    setView('inventory');
  };

  const handleLogout = () => {
    setUser(null);
    setView('login');
  };

  const renderView = () => {
    if (view === 'login') {
      return <Login onLogin={handleLogin} />;
    }
    if (view === 'inventory') {
      return <Inventory user={user} />;
    }
    if (view === 'historical' && user.idRol === 1) {
      return <Historical />;
    }
    if (view === 'salidaProducto' && user.idRol === 2) {
      return <SalidaProducto />;
    }
    return null;
  };

  return (
    <div className="App">
      <NavBar user={user} onLogout={handleLogout} />
      {user && user.idRol === 1 && (
        <>
          <button onClick={() => setView('inventory')}>View Inventory</button>
          <button onClick={() => setView('historical')}>View Historical</button>
        </>
      )}
      {user && user.idRol === 2 && (
        <>
          <button onClick={() => setView('inventory')}>View Inventory</button>
          <button onClick={() => setView('salidaProducto')}>View Salida Productos</button>
        </>
      )}
      {renderView()}
    </div>
  );
}

export default App;
