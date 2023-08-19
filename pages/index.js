// import Image from 'next/image'
import Head from 'next/head'
import Header from '@/components/Header'
import Main from '@/components/Main'
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
      <Main/>
      <Footer/>
      <ProfilePage/>
    </>
  );
}
