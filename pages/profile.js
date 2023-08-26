import Image from 'next/image';
import { useAuth } from '@/context/auth';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ProfilePage() {

  const { user, logout } = useAuth();

  return (
    <>

    <Header user={user} logout={logout} />
    <NavBar user={user}/>


    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="max-w-2xl w-full px-4">

        {/* Section 1: Avatar and Username */}
        <section className="flex justify-center border-4 border-orange-300 rounded bg-white mb-6 p-4">
          <div className="flex justify-center relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-4">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1 top-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="text-2xl font-semibold flex items-center pl-3">
          <span className="text-blue-500"> {user.username}</span>:
          </h1>
        </section>
        <div className='pl-10'>
          <p className="mb-2">Name: John Doe</p>
          <p className="mb-2">Email: john@example.com</p>
          <p className="mb-2">Phone #: (123) 456-7890</p>
        </div>


        {/* Section 2: Sold Products */}
        <section className="border-4 border-orange-300 rounded bg-white p-6">
          <h2 className="text-xl font-semibold mb-4 flex justify-center pt-4 ">Sold Products:</h2>
          <select className="border rounded-lg p-4 w-full ">
            <option value="">Browse your sold products here...</option>
          </select>
          <h2 className="flex justify-center text-xl font-semibold pt-4 mb-6">Wishlist:</h2>
          <select className="border rounded-lg p-4 w-full">
            <option value="">Browse your wishlist products here...</option>
          </select>
        </section>
      </div>
    </div>

    <Footer user={user}/>

    </>
  );
}
