// import Image from 'next/image';
import React from "react";
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/router';
import NavBar2 from "@/components/NavBar2"
import Header from "@/components/Header";
import Main2 from '@/components/Main2';
import Footer from "@/components/Footer";
import useResource from '@/hooks/useResource';
import { useAuth } from "@/context/auth";

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
      <NavBar2 />
    
      {/* <div className="flex flex-wrap justify-center">
        First Card
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Card title goes here</h5>
          </a>
          <a href="#">
            <Image
              src="/card_image"
              alt="Card's image"
              objectFit="card"
              width={40}
              height={40}
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Card description goes here.</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Card price goes here.</p>
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring focus:outline-none"
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={(e) => {
                const button = e.target;
                button.style.backgroundColor = button.style.backgroundColor === 'red' ? 'green' : 'red';
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        Second Card
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Card title goes here</h5>
          </a>
          <a href="#">
            <Image
              src="/card_image"
              alt="Card's image"
              objectFit="card"
              width={40}
              height={40}
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Card description goes here.</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Card price goes here.</p>
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring focus:outline-none"
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={(e) => {
                const button = e.target;
                button.style.backgroundColor = button.style.backgroundColor === 'red' ? 'green' : 'red';
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        Third Card
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Card title goes here</h5>
          </a>
          <a href="#">
            <Image
              src="/card_image"
              alt="Card's image"
              objectFit="card"
              width={40}
              height={40}
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Card description goes here.</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Card price goes here.</p>
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring focus:outline-none"
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={(e) => {
                const button = e.target;
                button.style.backgroundColor = button.style.backgroundColor === 'red' ? 'green' : 'red';
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div> */}

      <Main2 cards={resources || []} />
      <Footer user={user}/>  
    </>
  );
};