import InputFormRegistr from "../common/InputFormRegistr.jsx";

const Login = () => {
    return (

        <div className=" px-6 py-12 lg:px-8 w-full ">
            <div className="sm:mx-auto w-full sm:w-full ">
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                     alt="Your Company" className="mx-auto h-10 w-auto"/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your
                    account</h2>
            </div>

            <div className="mt-10 sm:mx-auto w-full sm:w-full sm:max-w-xl">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <div className="mt-2">
                            <InputFormRegistr
                                id="email"
                                type="email"
                                name="email"
                                label='Email address'
                                htmlFor="email"
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                autoComplete="email"/>
                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                            <InputFormRegistr
                                id="email"
                                type="email"
                                name="email"
                                label='Password'
                                htmlFor="email"
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                autoComplete="email"/>
                        </div>
                        <div className="text-sm text-right mt-2">
                            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot
                                password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign
                            in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    Not a member?
                    <a href="#" className="font-semibold  text-indigo-400 hover:text-indigo-300">Start a 14 day free
                        trial</a>
                </p>
            </div>
        </div>

    )
}
export default Login