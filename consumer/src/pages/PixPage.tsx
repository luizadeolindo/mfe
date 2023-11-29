'use client'
import useStore from '@/stores';
import React, { useState } from 'react';

export const PixPage = () => {
   const {count, increment, clear} = useStore()
  const [receiverName, setReceiverName] = useState('');
  const [amount, setAmount] = useState('');
  const containerStyles = {
    margin: '16px auto',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
  };

  const headingStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const balanceStyles = {
    fontSize: '1rem',
    marginBottom: '1rem',
  };

  const inputStyles = {
    padding: '8px',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    display: "block", 
    width: '100%'
  };

  const buttonStyles = {
    padding: '8px',
    backgroundColor: '#f8821d',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
  };
  const divStyle = {
    display: 'flex',
    gap: '8px', 
    alignItems: 'center'
  };

  return (
    <section style={containerStyles}>
      <h1 style={headingStyles}>Pix</h1>
      <div style={divStyle}>
      <p style={balanceStyles}>Saldo: {count}</p>
       <button type="button" onClick={increment} style={buttonStyles}>
          + 1
      </button>
      <button type="button" onClick={clear} style={buttonStyles}>
          reset
        </button></div>
      
      <form>
        <label>
          Nome do Destinatário:
          <input
            type="text"
            value={receiverName}
             onChange={(e) => setReceiverName(e.target.value)}
            style={inputStyles}
          />
        </label>
        <label>
          Valor:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyles}
          />
        </label>
        <button type="button" style={buttonStyles}>
          Enviar Pix
        </button>
      </form>
    </section>
  );
};


