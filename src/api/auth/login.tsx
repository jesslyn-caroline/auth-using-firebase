import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ToastSuccess from "../../components/toasts/toast_success";
import app from "../../firebase/firebase-config";
import ToastError from "../../components/toasts/toast_error";

interface Props {
    email: string,
    password: string
}

const auth = getAuth();

async function login({email, password}: Props): Promise<void>{
    app;
    try {
        await signInWithEmailAndPassword(auth, email, password)
        ToastSuccess("🚀 Login Successfully!");

    } catch (error : any) {
        if (error.code === "auth/invalid-credential") ToastError("🚫 Invalid Credential!");
    }
}

export default login