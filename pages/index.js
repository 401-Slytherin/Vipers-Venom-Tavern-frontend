// import Image from 'next/image'
import Head from 'next/head'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Main from '@/components/Main'
import About from '@/components/About'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
import SellPage from '@/components/SellPage'
import ProfilePage from '@/components/ProfilePage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        {/* <link rel='icon' href='../public/favicon.ico'/> */}
        <title>Viper's Venom </title>
      </Head>
      <Header/>
      <NavBar />
      <About />
      <Main/>
      <Footer/>
      <ProfilePage/>
    </>
  );
}
