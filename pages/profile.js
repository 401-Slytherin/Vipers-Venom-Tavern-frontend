import UserSellingAccordion from "@/components/UserSellingAccordion";
import WishlistAccordion from "@/components/WishlistAccordion";
import useResource from "@/hooks/useResource";
import { useAuth } from "@/context/auth";

// import Image from 'next/image';

export default function ProfilePage() {

  const { user } = useAuth();
  const { resources } = useResource();
  console.table(resources)

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full px-4">

        {/* Section 1: Avatar and Username */}
        <section className="bg-white p-8 mb-6 flex items-center">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-4">
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
          <h1 className="text-2xl pl-6 font-semibold text-right">
            Hello <span className="text-blue-500">username_goes_here</span>:
          </h1>
        </section>

        {/* <div className="mx-auto mb-2">
            <Image
              src="/profile_image"
              alt="User_avatar_picture"
              className="w-16 h-16 rounded-full mr-4"
              width={40}
              height={40}
            />
          </div> */}

        {/* Section 2: Name, Email, and Phone */}
        <section className="bg-white p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">User Information:</h2>
          <div>
            <p>Name:</p>
            <p>Email:</p>
            <p>Phone #:</p>
          </div>
        </section>

        {/* Section 3: Sold Products */}
        <UserSellingAccordion user={user} cards={resources || []}/>
        {/* <section className="bg-white p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">Sold Products:</h2>
          <select className="border rounded-lg p-2 w-full">
            <option value="">Browse your sold products here...</option>
          </select>
        </section> */}

        

        {/* Section 4: Wishlist */}
        <WishlistAccordion />
        {/* <section className="bg-white p-8">
          <h2 className="text-xl font-semibold mb-4">Wishlist:</h2>
          <select className="border rounded-lg p-2 w-full">
            <option value="">Browse your wishlist products here...</option>
          </select>
        </section> */}
      </div>
    </div>
  );
};
