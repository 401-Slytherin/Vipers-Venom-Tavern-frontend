// import React from "next/react";
import Header from "@/components//Header";
import NavBar from "@/components/NavBar";
import Main3 from "@/components/Main3";
import Footer from "@/components/Footer";
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/router';
import useResource from "@/hooks/useResource";



export default function SellPage() {

  const router = useRouter(); // Get the router object
  const { user, logout } = useAuth(); // Get user and logout function from useAuth
  const { createResource } = useResource();

  const goToProfile = () => {
    router.push('/profile'); // Navigate to the profile page
  };
  
  return (
    <>
      <Header user={user} logout={logout} />
    
 
      <NavBar user={user} />
      <Main3 createSellCard={createResource}
       user={user} />
    {/* <div className="body">
      <div className="form-container">
        <form>
          <div class="relative z-0 w-full mb-6 group">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card name:</label>
            <textarea id="name" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter card name here..."></textarea>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="condition" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card condition:</label>
            <select id="condition" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </select>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card category:</label>
            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Placeholder</option>
              <option>Placeholder</option>
              <option>Placeholder</option>
              <option>Placeholder</option>
            </select>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card description:</label>
            <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tell us a bit more about your card..."></textarea>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card price:</label>
            <textarea id="price" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the price you'd like to sell your car for here..."></textarea>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card year:</label>
            <textarea id="year" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the card's year here..."></textarea>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card number:</label>
            <textarea id="number" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the card's number here..."></textarea>
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Picture upload:</label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Please provide an image that accurately represents the current condition of the card.</div>
          </div>
          <div class="submit-button-container">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
        </form>
      </div>
    </div> */}

      <Footer />
      </>

  );
};