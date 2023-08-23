import Image from "next/image";
import ActiveLink from "@/hooks/router";
import LoginForm from "./LoginForm";

export default function Header({
  handleLogin,
  handleSignup,
  seeLogin,
  seeSignup,
}) {
  return (
    <header className="bg-cover bg-center bg-wood-pattern text-white py-10 px-6 flex items-center">
      {/* Logo Image */}
      <div className="w-64 h-16">
        <Image
          src="/python.png"
          alt="Vipers venom logo"
          layout="responsive"
          objectFit="cover"
          width={64}
          height={64}
        />
      </div>

      <h1 className="text-4xl flex-1 text-center font-bold font-sans">Viper's Venom Tavern</h1>
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
