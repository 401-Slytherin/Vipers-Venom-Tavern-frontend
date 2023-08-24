// import Image from 'next/image';
import React from "react";
import NavBar2 from "@/components/NavBar2"
import Header from "@/components/Header";
import Main2 from '@/components/Main2';
import Footer from "@/components/Footer";
import useResource from '@/hooks/useResource';


export default function BuyPage() {

  const { resources } = useResource();

  return (
    <>
      <Header />
      <NavBar2 />
      <Main2 cards={resources || []} />
      <p>Placeholder</p>
      <Footer />  
    </>
  );
};
