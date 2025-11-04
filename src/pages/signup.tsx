import { useState } from "react"
import BlockBtn from "../components/buttons/block_btn"
import InputFieldBox from "../components/input_field/input_field_box";
import ToastContainerCustom from "../components/toasts/toast_container_custom";
import signup from "../api/auth/signup";
import { Link } from "react-router";

function Signup() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const handleConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => setConfirm(event.target.value);

    return (
        <div className={`lg:pt-16 w-full h-screen lg:grid lg:grid-cols-2`}>
            <div className={`min-h-fit h-full lg:px-16 flex flex-col justify-center items-center lg:items-start gap-y-4`}>
                <h1 className={`font-bold text-2xl text-text`}>Sign Up</h1>
                <InputFieldBox type="email" handleChange={handleEmailChange} id="Email" />
                <InputFieldBox type="password" handleChange={handlePasswordChange} id="Password" />
                <InputFieldBox type="password" handleChange={handleConfirmChange} id="Confirm Password" />
                <div className={`h-1`} />
                <BlockBtn title={"Sign up"} action={() => signup({email, password, confirm})} />
                <span className={`text-sm text-text`}>Already have an account? <Link to="/login" className={`text-primary underline font-semibold`}>Login now!</Link></span>
            </div>
            <div className={`hidden lg:flex justify-center items-center`}>
                <img src="/Walk in the city-rafiki.png" alt="Hello" className={`w-100`}/>
            </div>
            <ToastContainerCustom />
        </div>
    )
}

export default Signup