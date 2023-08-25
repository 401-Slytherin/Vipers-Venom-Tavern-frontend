import { useState } from "react";

export default function RegisterForm( {register} ) {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }
        register(username, password, email);
    };



    return (
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label
                    htmlFor="regusername"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Username
                    </label>
                    <input
                    type="text"
                    name="username"
                    id="regusername"
                    onChange={ (e) => setUsername(e.target.value) }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    required=""
                    />
                </div>

                <div>
                    <label
                    htmlFor="regemail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Your email
                    </label>
                    <input
                    type="email"
                    name="regemail"
                    id="regemail"
                    onChange={ (e) => setEmail(e.target.value) }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    />
                </div>
                <div>
                    <label
                    htmlFor="regpassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Password
                    </label>
                    <input
                    type="password"
                    name="regpassword"
                    id="regpassword"
                    onChange={ (e) => setPassword(e.target.value) }
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    />
                </div>
                <div>
                    <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Confirm password
                    </label>
                    <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    onChange={ (e) => setConfirmPassword(e.target.value) }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    />
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                    Login here
                    </a>
                </p>
                </form>
            </div>
            </div>
        </div>
        </section>
    );
}