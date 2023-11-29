'use client'
import dynamic from "next/dynamic";
import { useState } from 'react';
import { Saldo } from './Saldo';
import {PixPage} from './PixPage';
import useStore from '@/stores';

const Header = dynamic(
  () => import("header/components/Header").then((m) => m.Header),
  {
    ssr: false,
  }
);

export default function Home() {
 
 const [currentPage, setCurrentPage] = useState('saldo');
  const showPage = (page: string) => {
    setCurrentPage(page);
  };
  console.log(currentPage)
  return (
    <>
      {/* @ts-ignore */}
      
      <Header showPage={showPage} />
      {currentPage === 'saldo' ? <Saldo /> : <PixPage />}
    </>
  );
}
