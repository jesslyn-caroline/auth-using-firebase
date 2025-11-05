import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ToastSuccess from "../../components/toasts/toast_success";
import app from "../../firebase/firebase-config";
import ToastError from "../../components/toasts/toast_error";
import { useNavigate } from "react-router";

interface Props {
    email: string,
    password: string
}

function login() {
    const auth = getAuth();
    const navigate = useNavigate();

    async function loginWithEmailandPassword({email, password}: Props): Promise<void>{
        app;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            ToastSuccess("🚀 Login Successfully!");
            navigate("/");
    
        } catch (error : any) {
            if (error.code === "auth/invalid-credential") ToastError("🚫 Invalid Credential!");
        }
    }

    return { loginWithEmailandPassword };
}



export default login