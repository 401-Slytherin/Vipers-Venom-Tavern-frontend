import Image from 'next/image';
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/router';


export default function ProfilePage() {

  const router = useRouter(); // Get the router object
  const { user, logout } = useAuth(); // Get user and logout function from useAuth

  return (
    <>
      <Header user={user} logout={logout} />


      <NavBar user={user} />
      <div className="bg-gray-100 min-h-screen flex justify-center items-center pt-10 pb-10">
        <div className="max-w-2xl w-full px-4 mt-4 mb-4">
          {/* Section 1: Avatar and Username */}
          <section className="bg-white p-8 mb-6 text-center">
            <div className="mx-auto mb-2">
              <Image
                src="/profile_image"
                alt="User_avatar_picture"
                className="w-16 h-16 rounded-full mr-4"
                width={40}
                height={40}
              />
              {user&& <h1 className="text-2xl font-semibold">Hello {user.username}!</h1>}
              
            </div>
          </section>

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
          <section className="bg-white p-8 mb-6">
            <h2 className="text-xl font-semibold mb-4">Sold Products:</h2>
            <select className="border rounded-lg p-2 w-full">
              <option value="">Browse your sold products here...</option>
            </select>
          </section>

          {/* Section 4: Wishlist */}
          <section className="bg-white p-8">
            <h2 className="text-xl font-semibold mb-4">Wishlist:</h2>
            <select className="border rounded-lg p-2 w-full">
              <option value="">Browse your wishlist products here...</option>
            </select>
          </section>
        </div>
      </div>
      <Footer user={user} />
    </>
  );
};
