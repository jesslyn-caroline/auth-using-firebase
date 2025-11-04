import { Bounce, toast } from "react-toastify";

function ToastError(msg: string) {
    const theme = localStorage.getItem('theme') || 'light';

    return (
        toast.error(msg, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: theme,
            transition: Bounce,
        })
    )
}

export default ToastError