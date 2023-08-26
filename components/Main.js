
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Image from "next/image";

export default function Main({ user, register, login, seeLogin, seeSignup }) {
  return (
    <main>
      {user ?
        <>

          <div className="flex flex-col items-center justify-center py-6 bg-gray-100">
            <h1 className="text-green-500">Logged In! Welcome {user.username}</h1>
          </div>

          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="border-4 border-orange-300 p-4 bg-white rounded-lg shadow-lg mb-4">
              <h2 className="text-center text-3xl font-bold">Welcome to Viper's Venom Tavern!</h2>
            </div>

            <Image
              src="/d20.png"
              alt="D20 dice image"
              width={64}
              height={64}
            />

            <div className="border-4 border-orange-300 p-4 bg-white rounded-lg shadow-lg mb-4 max-w-xl">
              <h2 className="text-center text-2xl font-bold mb-2">Commonly Asked Questions:</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">What is Viper's Venom Tavern?</li>
                <p className="ml-6">A. Viper's Venom Tavern is a website for cards of all sorts. From decks of classic cards, competitive fantasy cards, to even big names like Magic and Pokemon, you name it, we got it! Users can buy, sell, and trade cards by putting them up for offer, or purchase a card your interested in.</p>
                <li className="mb-2">How can I join?</li>
                <p className="ml-6">A. To join the tavern, simply sign up on our website and become a member of our community.</p>
                <li className="mb-2">How can I sell my cards?</li>
                <p className="ml-6">A. Make sure you are signed up, click on the sell link, fill out some information, and you're good to go! Your card will be up for sale in the buy page.</p>
              </ul>
            </div>

            <div className="border-4 border-orange-300 p-4 bg-white rounded-lg shadow-lg max-w-2xl">
              <h2 className="text-center text-2xl font-bold mb-2">Upcoming Events:</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">Scrotch night:</li>
                <p className="ml-6">Weekly scrotch tournament. Bring your friends, family, or enemies to compete for bragging rights and prizes!</p>
                <p className="text-xs ml-6">Viper's Venom Tavern is not responcible for death/dismemberment during scrotch tournaments</p>
                <li className="mb-2">Henry's card corner:</li>
                <p className="ml-6">Card give-aways hosted by Henry Ghoon, answer trivia questions with other members to get a chance at receiving a piece of merchandise!</p>
              </ul>
            </div>
          </div>


        </>
        : seeLogin || seeSignup ? (
          <>
            {seeLogin && <LoginForm login={login} />}
            {seeSignup && <RegisterForm register={register} />}
          </>
        ) : (
          <>

            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
              <div className="border-4 border-orange-300 p-4 bg-white rounded-lg shadow-lg mb-4">
                <h2 className="text-center text-3xl font-bold">Welcome to Viper's Venom Tavern!</h2>
              </div>

              <Image
                src="/d20.png"
                alt="Vipers venom logo"
                width={64}
                height={64}
              />

              <div className="border-4 border-orange-300 p-4 bg-white rounded-lg shadow-lg mb-4 max-w-xl">
                <h2 className="text-center text-2xl font-bold mb-2">Commonly Asked Questions:</h2>
                <ul className="list-disc pl-6">
                  <li className="mb-2">What is Viper's Venom Tavern?</li>
                  <p className="ml-6">A. Viper's Venom Tavern is a website for cards of all sorts. From decks of classic cards, competitive fantasy cards, to even big names like Magic and Pokemon, you name it, we got it! Users can buy, sell, and trade cards by putting them up for offer, or purchase a card your interested in.</p>
                  <li className="mb-2">How can I join?</li>
                  <p className="ml-6">A. To join the tavern, simply sign up on our website and become a member of our community.</p>
                  <li className="mb-2">How can I sell my cards?</li>
                  <p className="ml-6">A. Make sure you are signed up, click on the sell link, fill out some information, and you're good to go! Your card will be up for sale in the buy page.</p>
                </ul>
              </div>

              <div className="border-4 border-orange-300 p-4 bg-white rounded-lg shadow-lg max-w-2xl">
                <h2 className="text-center text-2xl font-bold mb-2">Upcoming Events:</h2>
                <ul className="list-disc pl-6">
                  <li className="mb-2">Scrotch night:</li>
                  <p className="ml-6">Weekly scrotch tournament. Bring your friends, family, or enemies to compete for bragging rights and prizes!</p>
                  <p className="text-xs ml-6">Viper's Venom Tavern is not responcible for death/dismemberment during scrotch tournaments</p>
                  <li className="mb-2">Henry's card corner:</li>
                  <p className="ml-6">Card give-aways hosted by Henry Ghoon, answer trivia questions with other members to get a chance at receiving a piece of merchandise!</p>
                </ul>
              </div>
            </div>


          </>
        )
      }
    </main>
  );
}