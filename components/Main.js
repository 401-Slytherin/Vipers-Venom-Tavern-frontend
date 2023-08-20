
import AboutUs from "@/pages/about";

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
        <h1>Welcome to Viper's Venom Tavern!</h1>
      )}
    </main>
  );
}