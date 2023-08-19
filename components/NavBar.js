import React from 'react'

export default function NavBar() {
  return (
    <nav className='bg-yellow-500 text-white p-4'>
      <ul className='flex space-x-4'>
        <li>
          <a href='#' className='hover:text-yellow-100'>Buy</a>
          <a href='#' className='hover:text-yellow-100'>Sell</a>
          <a href='#' className='hover:text-yellow-100'>Trade</a>
          <a href='#' className='hover:text-yellow-100'>About</a>
        </li>
      </ul>
    </nav>

  );
};

