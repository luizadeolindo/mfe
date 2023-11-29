import { useState } from 'react';
import { useStore } from 'consumer/stores/useStore'
import { headerStyles } from './styles';
type ShowPageFunction = (page: string) => void;

export interface NavProps {
  showPage: ShowPageFunction;
  showBalance: boolean
}


export const Header = ({ showPage }: NavProps) => {

  
  const {count} = useStore()
  const [balance, setBalance] = useState(false)
  const showBalance = () => {
    setBalance(!balance)
  }
  return (
    <header
      style={headerStyles}
    >
      <h1 style={{ fontSize: "24px" }}>BANCO</h1> 
      <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px', cursor: 'pointer' }}> 
        <li onClick={() => showBalance()}>{balance? `R$ ${count}` : 'Mostrar saldo'}</li>
        <li onClick={() => showPage('saldo')}>Saldo</li>
        <li onClick={() => showPage('pix')}> Pix</li>
      </ul>
    </header>
  );
}
