import { useAuth } from '@/context/auth'
import useResource from "@/hooks/useResource";
import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Main from '@/components/Main'
import Footer from '@/components/Footer'


export default function Home() {

  const [seeLogin, setSeeLogin] = useState(false);
  const [seeSignup, setSeeSignup] = useState(false);
  const { user, login, logout, register } = useAuth();
  const { resources, deleteResource, createResource } = useResource();


  function handleLoginClick(e) {
    e.preventDefault();

    if (!seeLogin || (!seeLogin && seeSignup)) {
      setSeeLogin((seeLogin) => true)
      setSeeSignup((seeSigup) => false)
    }
    console.log(seeLogin)
  }

  function handleSignupClick(e) {
    e.preventDefault();

    if (!seeSignup || (!seeSignup && seeLogin)) {
      setSeeLogin((seeLogin) => false)
      setSeeSignup((seeSigup) => true)
    }

    console.log(seeSignup)
  }

  function handleLogoutClick(e) {
    logout()
  }

  

  
  return (
    <>
      <Head>
        <link rel='icon' href='../public/favicon.ico' />
        <title>Viper's Venom</title>
      </Head>

      <Header
        user={user}
        logout={handleLogoutClick}
        handleLogin={handleLoginClick}
        handleSignup={handleSignupClick}
        seeLogin={seeLogin}
        seeSignup={seeSignup}
      />
      <NavBar user={user}/>
      <Main
        seeLogin={seeLogin}
        seeSignup={seeSignup}
        user={user}
        login={login}
        register={register}
       />
      {/* <ProfilePage/> */}
      <Footer
        user={user}
      />
    </>
  );
}
