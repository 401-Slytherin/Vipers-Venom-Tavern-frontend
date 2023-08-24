import React from 'react'
import Link from 'next/link';

export default function NavBar({user}) {
  return (
    <nav className="bg-black text-white p-4 flex justify-center border-t-4 border-orange-300 shadow-lg">
      <ul className="flex space-x-4 justify-between">
        <li className="flex space-x-4">
          <Link href="/" className="hover:text-gray-500">Home</Link>
          {user ? (
            <>
              <Link href="/buy" className="hover:text-gray-500">Buy</Link>
              <Link href="/sell" className="hover:text-gray-500">Sell</Link>
            </>
            ) : (
              <Link href="/buy" className="hover:text-gray-500">Browse</Link>
            )
          }
          </li>
      </ul>
    </nav>

  );
};
