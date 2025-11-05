import { getAuth, signOut } from "firebase/auth"
import ToastSuccess from "../../components/toasts/toast_success";
import ToastError from "../../components/toasts/toast_error";
import app from "../../firebase/firebase-config";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ProfileContext } from "../../providers/profile_provider";

function signout() {
    const auth = getAuth();
    const navigate = useNavigate();

    const { changeLoginStatus } = useContext(ProfileContext);

    async function signOutfromAcc():Promise<void> {
        app;
        try {
            await signOut(auth)
            ToastSuccess("🚀 Sign Out Successfully!")
            changeLoginStatus("");
            navigate("/login");
        } catch (error: any) {
            ToastError("🚫 Sign Out Failed!")
        }
    }

    return { signOutfromAcc };
}

export default signout