import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-yellow-500 text-white p-4 flex justify-center">
      <ul className="flex space-x-4 justify-between">
        <li className="flex space-x-4">
          <a href="#" className="hover:text-yellow-100">Buy</a>
          <a href="#" className="hover:text-yellow-100">Sell</a>
          <a href="#" className="hover:text-yellow-100">Trade</a>
          <Link className="hover:text-yellow-100" href="/About.js">About</Link>
        </li>
      </ul>
    </nav>
  );
}
