import Script from 'next/script';
import { useEffect } from 'react';

export default function WishlistAccordion() {

    useEffect(() => {
      // JavaScript to handle accordion toggling
      const wishlistButtonsArray = document.querySelectorAll('[data-accordion-target]');
      wishlistButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-accordion-target');
          const target = document.querySelector(targetId);
          // console.log(target)
          target.classList.toggle('hidden');
        });
      });
    }, []);
  
    return (
      
      <div id="wishlist-accordion-collapse" data-accordion="collapse">
        <div id="wishlist-accordion-collapse-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#wishlist-accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>Wishlist</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </div>
        <div id="wishlist-accordion-collapse-body-1" className="hidden" aria-labelledby="wishlist-accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
          </div>
        </div>
        {/* Repeat for other accordion sections */}

          <Script id='wishlist-accordion'>
            {`
              // JavaScript to handle accordion toggling
              const wishlistButtonsArray = document.querySelectorAll('[data-accordion-target]');
              wishlistButtonsArray.forEach((button) => {
                button.addEventListener('click', () => {
                  const targetId = button.getAttribute('data-accordion-target');
                  const target = document.querySelector(targetId);
                  target.classList.toggle('hidden');
                });
              });
            `}
          </Script>

      </div>
    );
}
