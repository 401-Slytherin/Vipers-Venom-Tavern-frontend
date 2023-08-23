import Image from 'next/image';
import { useState } from 'react'; // allows functional components to add and manage local state

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state to false

  return (
    <header className="bg-cover bg-center bg-wood-pattern text-white py-20 flex justify-between items-center">
      <div className="text-center">
        <Image className="pl-10"
          src="/python.png"
          alt="Vipers venom logo"
          objectFit="cover"
          width={500}
          height={100}
        />
        <h1 className="text-4xl pl-20 font-bold font-sans">Viper's Venom Tavern</h1>
        <p className="text-lg"></p>
      </div>
      <div className="space-x-4 pr-10">
        {isLoggedIn ? (
          <>
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded">
              Profile
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => setIsLoggedIn(false)} // updates the isLoggedIn state to false.
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Sign Up
            </button>
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
              onClick={() => setIsLoggedIn(true)} // updates the isLoggedIn state to true.
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}
