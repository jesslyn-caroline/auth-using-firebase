interface Props {
    title: string,
    action: () => void,
}

function BlockBtn({title, action} : Props) {
    return (
        <button className={`outline-none max-w-md w-full bg-primary text-white py-2 rounded-md`} title={``} onClick={action}>
            {title}
        </button>
    )
}

export default BlockBtn