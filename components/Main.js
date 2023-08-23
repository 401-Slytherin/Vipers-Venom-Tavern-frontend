
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Main({ seeLogin, seeSignup }) {
  return (
    <main>
      {seeLogin || seeSignup ? (
        <>
          {seeLogin && <LoginForm />}
          {seeSignup && <RegisterForm />}
        </>
      ) : (

        <>

          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="border-4 border-red-500 p-4 bg-white rounded-lg shadow-lg mb-4">
              <h2 className="text-center text-3xl font-bold">Welcome to Viper's Venom Tavern!</h2>
            </div>

            <div className="border-4 border-red-500 p-4 bg-white rounded-lg shadow-lg mb-4">
              <h2 className="text-center text-2xl font-bold mb-2">Commonly Asked Questions:</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">What is Viper's Venom Tavern?</li>
                <p className="ml-6">A. Viper's Venom Tavern is a website for cards of all sorts. From decks of classic cards, competitive fantasy cards, to even big names like Magic and Pokemon, you name it, we got it! Users can buy, sell, and trade cards by putting them up </p>
                <li className="mb-2">How can I join the tavern?</li>
                <p className="ml-6">A. To join the tavern, simply sign up on our website and become a member of our community.</p>
              </ul>
            </div>

            <div className="border-4 border-red-500 p-4 bg-white rounded-lg shadow-lg">
              <h2 className="text-center text-2xl font-bold mb-2">Upcoming Events:</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">Bard's Night: Open Mic</li>
                <p className="ml-6">Join us this Saturday for a night of music, poetry, and enchanting performances by bards from all around.</p>
                <li className="mb-2">Tavern Trivia: Battle of Wits</li>
                <p className="ml-6">Test your knowledge and compete with fellow patrons in our weekly tavern trivia night!</p>
              </ul>
            </div>
          </div>


        </>
      )}
    </main>
  );
}