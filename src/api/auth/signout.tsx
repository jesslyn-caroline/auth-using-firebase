import { getAuth, signOut } from "firebase/auth"
import ToastSuccess from "../../components/toasts/toast_success";
import ToastError from "../../components/toasts/toast_error";
import app from "../../firebase/firebase-config";
import { useNavigate } from "react-router";

function signout() {
    const auth = getAuth();
    const navigate = useNavigate();

    async function signOutfromAcc():Promise<void> {
        app;
        try {
            await signOut(auth)
            ToastSuccess("🚀 Sign Out Successfully!")
            navigate("/login");
        } catch (error: any) {
            ToastError("🚫 Sign Out Failed!")
        }
    }

    return { signOutfromAcc };
}

export default signout