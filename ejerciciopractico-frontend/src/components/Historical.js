import React, { useState, useEffect } from 'react';
import { fetchAllHistorical } from '../controllers/historicalController';

const Historical = () => {
  const [historical, setHistorical] = useState([]);

  useEffect(() => {
    const getHistorical = async () => {
      const allHistorical = await fetchAllHistorical();
      setHistorical(allHistorical);
    };
    getHistorical();
  }, []);

  return (
    <div className="historical">
      <h2>Historical</h2>
      <ul>
        {historical.map(item => (
          <li key={item.idHistorico}>
            {item.fechaHora} - {item.tipoMovimiento} by User {item.idUsuario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historical;
