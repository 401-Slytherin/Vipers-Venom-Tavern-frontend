import Image from "next/image";
import Link from "next/link";
import ActiveLink from "@/hooks/router";
import LoginForm from "./LoginForm";

export default function Header({
  handleLogin,
  handleSignup,
  seeLogin,
  seeSignup,
}) {
  return (
    <header className="bg-cover bg-center bg-wood-pattern text-white py-20 flex justify-between items-center">
      <div className="text-center">
        <Image
          className="pl-10"
          src="/cobra.png"
          alt="Vipers venom logo"
          objectFit="cover"
          width={500}
          height={100}
        />
        <h1 className="text-4xl pl-20 font-bold font-sans">
          Viper's Venom Tavern
        </h1>
        <p className="text-lg"></p>
      </div>
      <div className="space-x-4 pr-10">
        {!seeLogin && !seeSignup ? (
          <>
            <button
              onClick={handleSignup}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Sign Up
            </button>
            <button
              onClick={handleLogin}
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              Log In
            </button>
          </>
        ) : seeLogin ? (
          <button
            onClick={handleSignup}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Log In
          </button>
        )}
      </div>
    </header>
  );
}
