import { Bounce, toast } from "react-toastify";

function ToastSuccess(msg: string) {
    const theme = localStorage.getItem('theme') || 'light';

    return (
        toast.success(msg, {
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

export default ToastSuccess