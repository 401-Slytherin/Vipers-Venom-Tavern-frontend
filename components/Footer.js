import { FaGithub } from 'react-icons/fa';
import Link from "next/link";

export default function Footer({ user }) {
  return (
    <footer className="text-white bg-black">
      <div className="container mx-auto py-8 flex justify-between items-center">
        <p className="text-sm">
          <span className="mr-2">&copy;</span> 401_Slytherin 2023
        </p>
        <nav className="bg-black text-white p-4">
          <ul className="flex justify-between space-x-4 pr-20">
            <li className="flex space-x-4 pr-8">
              <Link href="/" className="hover:text-gray-500">Home</Link>
              {user ? (
                <>
                  <Link href="/buy" className="hover:text-gray-500">Buy</Link>
                  <Link href="/sell" className="hover:text-gray-500">Sell</Link>
                  <Link href="/about" className="hover:text-gray-500">About</Link>
                </>
                ) : (
                  <Link href="/about" className="hover:text-gray-500">About</Link>
              )}
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <a href="https://github.com/401-Slytherin" className="text-xl text-white">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}