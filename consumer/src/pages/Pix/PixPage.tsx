'use client'
import useStore from '@/stores/useStore';
import React, { useState } from 'react';
import { containerStyles, headingStyles, balanceStyles, inputStyles, buttonStyles, divStyle } from './styles';

 const PixPage = () => {
   const {count, increment, clear} = useStore()
  const [receiverName, setReceiverName] = useState('');
  const [amount, setAmount] = useState('');
  

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

export default PixPage
