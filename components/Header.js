import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-cover bg-center bg-wood-pattern text-white py-10 px-6 flex items-center">
      {/* Logo Image */}
      <div className="w-64 h-16">
        <Image
          src="/cobra.png"
          alt="Vipers venom logo"
          layout="responsive"
          objectFit="cover"
          width={64}
          height={64}
        />
      </div>

      <h1 className="text-4xl flex-1 text-center font-bold font-sans">Viper's Venom Tavern</h1>
      <div className="space-x-4">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>

        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
}
