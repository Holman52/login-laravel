export const InputForNewUser = (props) => {
    return (
        <>
            <div className="input-field">
                <label className="block text-left text-2xl/6 font-medium mb-4 text-gray-100" htmlFor={props.htmlFor}>
                    {props.label}
                </label>
                {props.children}
                <input
                    type={props.type}
                    required
                    id = {props.id}
                    name = {props.name}
                    value={props.value}
                    onChange={props.onChange}
                    autoComplete={props.autoComplete}
                    placeholder={props.placeholder}
                    className={`block w-full rounded-md bg-white/5 px-3 py-2 lg:text-2xl text-white outline-1
                 -outline-offset-1  placeholder:text-gray-500 focus:outline-2
                  focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6
                   ${props.error ? 'outline-red-600' : 'outline-white/10'}`}
                />
                {props.errorMessage && <p className="text-red-600 text-xl mt-2">{props.errorMessage}</p>}
            </div>
        </>
    )
}
