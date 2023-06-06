/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const PizzaOrder = ({ order }) => {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdated(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('O componente foi atualizado');
    console.log(`Seu pedido: ${order}`);
  }, [order]);

  const handleCancel = () => {
    alert('Seu pedido foi cancelado');
  };

  return (
    <div>
      <h1>{updated ? 'Seu pedido?' : 'Carregando...'}</h1>
      {updated && (
        <button onClick={handleCancel}>Cancelar Pedido</button>
      )}
    </div>
  );
};

export default PizzaOrder;
