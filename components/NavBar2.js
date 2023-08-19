import React from 'react'

export default function NavBar2() {
  return (
    <nav className='bg-yellow-500 text-white p-4'>
      <ul className='flex space-x-4'>
        <li>
          <a href='#' className='hover:text-yellow-100'>Home</a>
          <a href='#' className='hover:text-yellow-100'>Magic</a>
          <a href='#' className='hover:text-yellow-100'>Pokemon</a>
          <a href='#' className='hover:text-yellow-100'>Decks</a>
          <a href='#' className='hover:text-yellow-100'>Misc</a>
          <a href='#' className='hover:text-yellow-100'>All</a>
        </li>
      </ul>
    </nav>

  );
};

