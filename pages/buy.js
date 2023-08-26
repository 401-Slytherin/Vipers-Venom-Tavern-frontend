// import Image from 'next/image';
import React from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/router';
import NavBar from "@/components/NavBar"
import Header from "@/components/Header";
import Main2 from '@/components/Main2';
import Footer from "@/components/Footer";
import useResource from '@/hooks/useResource';

export default function BuyPage() {
  
  const { resources } = useResource();
  const { user, logout } = useAuth(); // Get user and logout function from useAuth
  const router = useRouter(); // Get the router object

  const goToProfile = () => {
    router.push('/profile'); // Navigate to the profile page
  };

  return (
    <>
      <Header user={user} logout={logout} />
      <NavBar user={user}/>
      {/*  <NavBar2 /> */}
      <Main2 cards={resources || []} />
      <Footer user={user}/>  
    </>
  );
};