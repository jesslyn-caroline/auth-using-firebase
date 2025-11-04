import { getAuth, signOut } from "firebase/auth"
import ToastSuccess from "../../components/toasts/toast_success";
import ToastError from "../../components/toasts/toast_error";
import app from "../../firebase/firebase-config";

const auth = getAuth();

async function signout():Promise<void> {
    app;
    try {
        await signOut(auth)
        ToastSuccess("🚀 Sign Out Successfully!")
    } catch (error: any) {
        ToastError("🚫 Sign Out Failed!")
    }
}

export default signout