import Image from 'next/image';
import NavBar2 from '@/components/NavBar2';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function BuyPage() {
  return (
    <div>
      <Header />
      <NavBar2 />
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Card title goes here</h5>
        </a>
        <a href="#">
        <Image
          src="/card_image"
          alt="Card's image"
          objectFit="card"
          width={40}
          height={40}
        />
        </a>
        <div class="p-5">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Card description goes here.</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Card price goes here.</p>
          {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> */}
      </div>
    </div>
      <Footer />
    </div>
  );
};