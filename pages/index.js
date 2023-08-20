import { useAuth } from '@/context/auth'
import useResource from "@/hooks/useResource";
import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Main from '@/components/Main'
import About from '@/components/About'
import Footer from '@/components/Footer'
import ActiveLink from '@/hooks/router'
import SellPage from '@/components/SellPage'
import ProfilePage from '@/components/ProfilePage'


export default function Home() {

  const [seeLogin, setSeeLogin ] = useState(false);
  const [seeSignup, setSeeSignup] = useState(false);


  function handleLoginClick(e) {
    e.preventDefault();
    
    if (!seeLogin || (!seeLogin && seeSignup)){
      setSeeLogin((seeLogin) => true)
      setSeeSignup((seeSigup) => false)
    }
    console.log(seeLogin)
  }

  function handleSignupClick(e) {
    e.preventDefault();
    
    if (!seeSignup || (!seeSignup && seeLogin)){
      setSeeLogin((seeLogin) => false)
      setSeeSignup((seeSigup) => true)
    }
     
    console.log(seeSignup)
  }


  const { user, login, logout, register } = useAuth();
  const { resources, deleteResource, createResource } = useResource();


  return (
    <>
      <Head>
        <link rel='icon' href='../public/favicon.ico'/>
        <title>Viper's Venom</title>
      </Head>
    
//    Note: Brenden working off this uncommented section, need to give About a home
//       <Header/>
//       <NavBar />
//       <About />
//       <Main/>

      <Header 
        user ={user}
        logout = {logout} 
        handleLogin = {handleLoginClick} 
        handleSignup = {handleSignupClick}
        seeLogin={seeLogin}
        seeSignup={seeSignup}
        />
      <Main
      seeLogin={seeLogin}
      seeSignup={seeSignup}
      user={user}
       />
      <ProfilePage/>
      <Footer/>
    </>
  );
}
