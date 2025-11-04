interface Props {
    type: string, 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    id: string
}

function InputFieldBox({type, handleChange, id} : Props) {
    return (
        <div className={`max-w-md w-full text-md text-text flex flex-col gap-y-1`}>
            <label htmlFor={id}>{id}</label>
            <input title={``} type={type} className={`outline-none w-full border border-gray-500 rounded-sm text-sm bg-transparent py-2 px-2`} onChange={handleChange}/>
        </div>
    )
}

export default InputFieldBox