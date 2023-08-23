// import Image from 'next/image';
// import { useState } from 'react'; // allows functional components to add and manage local state

// export default function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state to false

//   return (
//     <header className="bg-cover bg-center bg-wood-pattern text-white py-20 flex justify-between items-center">
//       <div className="text-center">
//         <Image className="pl-10"
//           src="/cobra.png"
//           alt="Vipers venom logo"
//           objectFit="cover"
//           width={500}
//           height={100}
//         />
//         <h1 className="text-4xl pl-20 font-bold font-sans">Viper's Venom Tavern</h1>
//         <p className="text-lg"></p>
//       </div>
//       <div className="space-x-4 pr-10">
//         {isLoggedIn ? (
//           <>
//             <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded">
//               Profile
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//               onClick={() => setIsLoggedIn(false)} // updates the isLoggedIn state to false.
//             >
//               Log Out
//             </button>
//           </>
//         ) : (
//           <>
//             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//               Sign Up
//             </button>
//             <button
//               className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
//               onClick={() => setIsLoggedIn(true)} // updates the isLoggedIn state to true.
//             >
//               Log In
//             </button>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }




// import Image from "next/image";
// import { useState } from "react";
// import ActiveLink from "@/hooks/router";
// import LoginForm from "./LoginForm";

// export default function Header({
//   handleLogin,
//   handleSignup,
//   seeLogin,
//   seeSignup,
// }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <header className="bg-cover bg-center bg-wood-pattern text-white py-10 px-6 flex items-center">
//       {/* Logo Image */}
//       <div className="w-64 h-16">
//         <Image
//           src="/cobra.png"
//           alt="Vipers venom logo"
//           layout="responsive"
//           objectFit="cover"
//           width={64}
//           height={64}
//         />
//       </div>

//       <h1 className="text-4xl flex-1 text-center font-bold font-sans">
//         Viper's Venom Tavern
//       </h1>
//       <div className="space-x-4 pr-10">
//         {isLoggedIn ? (
//           <>
//             <button
//               className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
//             >
//               Profile
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//               onClick={() => setIsLoggedIn(false)}
//             >
//               Log Out
//             </button>
//           </>
//         ) : !seeLogin && !seeSignup ? (
//           <>
//             <button
//               onClick={handleSignup}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//             >
//               Sign Up
//             </button>
//             <button
//               onClick={handleLogin}
//               className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
//             >
//               Log In
//             </button>
//           </>
//         ) : seeLogin ? (
//           <button
//             onClick={handleSignup}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//           >
//             Sign Up
//           </button>
//         ) : (
//           <button
//             onClick={handleLogin}
//             className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
//           >
//             Log In
//           </button>
//         )}
//       </div>
//     </header>
//   );
// }