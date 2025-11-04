import { Bounce, ToastContainer } from "react-toastify"

function ToastContainerCustom () {
    const theme = localStorage.getItem('theme') || 'light';

    return (
        <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme={theme}
            transition={Bounce}
        />
    )
}

export default ToastContainerCustom