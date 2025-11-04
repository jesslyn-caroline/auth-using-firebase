import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import ToastSuccess from "../../components/toasts/toast_success"
import ToastError from "../../components/toasts/toast_error";
import app from "../../firebase/firebase-config";

interface Props {
    email: string, 
    password: string,
    confirm: string
}

const auth = getAuth()

async function signup({ email, password, confirm } : Props): Promise<void> {
    app;
    if (password !== confirm) {
        ToastError("🚫 Passwords do not match!");
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password)
        ToastSuccess("🚀 Sign Up Successfully!");
    } catch (error: any) {
        if (error.code === "auth/invalid-email") ToastError("🚫 Invalid Email!");
        if (error.code === "auth/weak-password") ToastError("🚫 Weak Password!");
        if (error.code === "auth/email-already-in-use") ToastError("🚫 Email Already In Use!");
    }
}

export default signup