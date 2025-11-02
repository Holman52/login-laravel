const InputFormRegistr = (props) => {
    return (
        <div className="input-field">
            <label className="block text-left text-m/6 font-medium mb-1 text-gray-100" htmlFor={props.htmlFor}>
                {props.label}
                {props.required && <span className="required">*</span>}
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
                className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 ${props.error ? 'input-error' : 'outline-red-600'}`}
            />
            {props.error && <span className="text-red-600 text-xs mt-2">{props.error}</span>}
        </div>


    )
}
export default InputFormRegistr