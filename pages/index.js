// import Image from 'next/image'
import { useAuth } from '@/context/auth'
import Head from 'next/head'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'


export default function Home() {

  const { user, login, logout, register } = useAuth();

  return (
    <>
      <Head>
        <link rel='icon' href='../public/favicon.ico'/>
        <title>Viper's Venom</title>
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}
