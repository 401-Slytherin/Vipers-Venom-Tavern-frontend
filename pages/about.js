import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/router';



export default function AboutUs() {

  const router = useRouter(); // Get the router object
  const { user, logout } = useAuth();

  const goToProfile = () => {
    router.push('/profile'); // Navigate to the profile page
  };

  return (

    <>


      <Header user={user} logout={logout}/>
      <NavBar user={user}/>

      <div className="flex justify-between items-center h-screen pl-10 pr-10 bg-gray-100">

        {/* Anthonys card */}
        <div class="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 class="flex justify-center mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Anthony Lopez</h5>
          <a href="https://github.com/Ostyantic">
            <div class="flex justify-center">
              <img class="rounded-xl border-4 border-gray-500 h-96" src="/anthony.jpg" alt="Brenden picture" />
            </div>
          </a>
          <div class="p-5">
            <ul class="mb-3 font-normal text-gray-400">Proficencies:</ul>
            <li class="mb-3 text-sm font-normal text-gray-400">Gamer</li>
            <li class="mb-3 text-sm font-normal text-gray-400">Logic</li>
            <li class="mb-3 text-sm font-normal text-gray-400">Intelligence</li>


            <p class="mb-3 font-normal text-gray-500">Software developer with a passion for providing quality and excellence. Aspiring video game developer.</p>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </div>
        </div>

        {/* Araceli's card */}
        <div class="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 class="flex justify-center mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Araceli Garcia</h5>
          <a href="https://github.com/Araceligm90">
            <div class="flex justify-center">
              <img class="rounded-xl border-4 border-gray-500 h-96" src="/araceli.jpg" alt="Araceli picture" />
            </div>
          </a>
          <div class="p-5">
            <ul class="mb-3 font-normal text-gray-400">Proficencies:</ul>
            <li class="mb-3 text-sm font-normal text-gray-400">Fitness</li>
            <li class="mb-3 text-sm font-normal text-gray-400">Python</li>
            <li class="mb-3 text-sm font-normal text-gray-400">Charisma</li>


            <p class="mb-3 font-normal text-gray-500">Software developer who's passionate about developing quality, fun and appealing products. Pursuing a career in Python.</p>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </div>
        </div>

        {/* Brendens card */}
        <div class="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 class="flex justify-center mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Brenden Moore</h5>
          <a href="https://github.com/Brendeen">
            <div class="flex justify-center">
              <img class="rounded-xl border-4 border-gray-500 h-96" src="/brenden.jpeg" alt="Brenden picture" />
            </div>
          </a>
          <div class="p-5">
            <ul class="mb-3 font-normal text-gray-400">Proficencies:</ul>
            <li class="mb-3 text-sm font-normal text-gray-400">Skateboarding</li>
            <li class="mb-3 text-sm font-normal text-gray-400">CSS Styling</li>
            <li class="mb-3 text-sm font-normal text-gray-400">Dexterity</li>


            <p class="mb-3 font-normal text-gray-500">Software developer with an eye for creativity. Pursuing a career in UI design and game development.</p>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </div>
        </div>

        {/* Jeremy's card */}
        <div class="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 class="flex justify-center mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Jeremy Adamson</h5>
          <a href="https://github.com/jeremy-adamson">
            <div class="flex justify-center">
              <img class="rounded-xl border-4 border-gray-500 h-96" src="/jeremy.jpg" alt="Brenden picture" />
            </div>
          </a>
          <div class="p-5">
            <ul class="mb-3 font-normal text-gray-400">Proficencies:</ul>
            <li class="mb-3 text-sm font-normal text-gray-400">Disk Golf</li>
            <li class="mb-3 text-sm font-normal text-gray-400">Recursion</li>
            <li class="mb-3 text-sm font-normal text-gray-400">Wisdom</li>


            <p class="mb-3 font-normal text-gray-500">Software developer using algorithms and python at Boeing. Pursuing an education at the University of Southern California.</p>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </div>
        </div>

      </div>

      <Footer user={user}/>

    </>

  );
}