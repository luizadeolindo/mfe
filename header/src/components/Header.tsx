import { useState } from 'react';
import dynamic from "next/dynamic";
// import { useStore } from 'consumer/stores/index'
// @ts-ignore
// import {requiredVersion} from 'shared_state'
type ShowPageFunction = (page: string) => void;

export interface NavProps {
  showPage: ShowPageFunction;
  showBalance: boolean
}

// const useStore = dynamic(
//    () => import("consumer/stores/index").then((m) => m.store),
//    {
//      ssr: false,
//    }
//  );
export const Header = ({ showPage }: NavProps) => {

  // console.log(requiredVersion)
  // const {count} = useStore()
  const [balance, setBalance] = useState(false)
  const showBalance = () => {
setBalance(!balance)
  }
  return (
    <header
      style={{
        backgroundColor: "#f8821d",
        color: "white",
        height: "80px",
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        padding: "0 20px", 
      }}
    >
      <h1 style={{ fontSize: "24px" }}>BANCO</h1> 
      <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px', cursor: 'pointer' }}> 
        <li onClick={() => showBalance()}>{balance ? <></> : 'Mostrar saldo'}</li>
        <li onClick={() => showPage('saldo')}>Saldo</li>
        <li onClick={() => showPage('pix')}> Pix</li>
      </ul>
    </header>
  );
}
