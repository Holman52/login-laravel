import {InputForNewUser} from "../common/InputForNewUser.jsx";


const Registr = () => {
    return (
        <div className=" px-6 py-12 lg:px-8 w-full  ">
            <div className="sm:mx-auto w-full sm:w-full ">
                <h2 className="mt-10 text-center text-5xl/9 font-bold tracking-tight text-white">Registration</h2>
            </div>

            <div className="mt-20 sm:mx-auto w-full sm:w-full sm:max-w-xl">
                <form action="#" method="POST"
                      // onSubmit={handleSubmit}
                      className="space-y-6">
                    <div>
                        <div className="mt-2">
                            <InputForNewUser
                                id="email"
                                type="email"
                                name="email"
                                label='Email address'
                                htmlFor="email"
                                // error={errorSate.email.bool}
                                // errorMessage={errorSate.email.errorMessage}
                                // onChange={(e) => handleChange('email', e.target.value)}
                                autoComplete="email"/>
                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                            <InputForNewUser
                                id="password"
                                type="password"
                                name="password"
                                label='Password'
                                htmlFor="password"
                                // error={errorSate.password.bool}
                                // errorMessage={errorSate.password.errorMessage}
                                // onChange={(e) => handleChange('password', e.target.value)}
                                регистрация                                autoComplete="password"/>
                        </div>
                        <div className="text-xl text-right mt-2">
                            <a href="#" className="font-semibold  text-indigo-400 hover:text-indigo-300"></a>
                        </div>
                    </div>
                    <div>
                        <InputForNewUser
                            id="Repeat password"
                            type="password"
                            name="Repeat password"
                            label='Repeat password'
                            htmlFor="Repeat password"
                            // error={errorSate.password.bool}
                            // errorMessage={errorSate.password.errorMessage}
                            // onChange={(e) => handleChange('Repeat password', e.target.value)}
                            autoComplete="password"/>
                    </div>

                    <div className="mt-10">
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 !text-3xl font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign
                            in
                        </button>
                    </div>
                </form>

                <div className="flex justify-between text-center mt-4 text-sm/6 text-gray-400">
                    <a href="#" className="font-semibold text-2xl text-indigo-400 hover:text-indigo-300">I don't have account</a>

                </div>
            </div>
        </div>
    )
}
export default Registr
