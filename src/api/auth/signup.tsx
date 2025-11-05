import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import ToastSuccess from "../../components/toasts/toast_success"
import ToastError from "../../components/toasts/toast_error";
import app from "../../firebase/firebase-config";
import { useNavigate } from "react-router";

interface Props {
    email: string, 
    password: string,
    confirm: string
}

function signup() {
    const auth = getAuth();
    const navigate = useNavigate();

    async function signUpwithEmailandPassword({ email, password, confirm } : Props): Promise<void> {
        app;
        if (password !== confirm) {
            ToastError("🚫 Passwords do not match!");
            return;
        }
    
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            ToastSuccess("🚀 Sign Up Successfully!");
            navigate("/login");
        } catch (error: any) {
            if (error.code === "auth/invalid-email") ToastError("🚫 Invalid Email!");
            if (error.code === "auth/weak-password") ToastError("🚫 Weak Password!");
            if (error.code === "auth/email-already-in-use") ToastError("🚫 Email Already In Use!");
        }
    }

    return { signUpwithEmailandPassword };
}

export default signup