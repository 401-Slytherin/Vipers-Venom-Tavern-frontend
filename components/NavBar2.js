import React from 'react'
import Link from 'next/link';

export default function NavBar2() {
  return (
    <nav className="bg-black text-white p-4 flex justify-center border-t-4 border-orange-300 shadow-lg">
      <ul className="flex space-x-4 justify-between">
        <li className="flex space-x-4">
          <Link href="/" className="hover:text-gray-500">Home</Link>
          <Link href='#' className='hover:text-gray-500'>Magic</Link>
          <Link href='#' className='hover:text-gray-500'>Pokemon</Link>
          <Link href='#' className='hover:text-gray-500'>Decks</Link>
          <Link href='#' className='hover:text-gray-500'>Misc</Link>
          <Link href='#' className='hover:text-gray-500'>All</Link>
        </li>
      </ul>
    </nav>

  );
};Link
