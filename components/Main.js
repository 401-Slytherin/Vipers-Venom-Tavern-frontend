
import AboutUs from "@/pages/about";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Main({ user, login, seeLogin, seeSignup }) {
  return (
    <main>
      {user ?
        <h1>Logged In! Welcome {user.username}</h1>
        : seeLogin || seeSignup ? (
          <>
            {seeLogin && <LoginForm login={login} />}
            {seeSignup && <RegisterForm />}
          </>
        ) : (
          <h1>Welcome to Viper's Venom Tavern!</h1>
        )
      }
    </main>
  );
}