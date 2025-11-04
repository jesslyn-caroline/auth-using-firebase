import { useState } from "react"
import BlockBtn from "../components/buttons/block_btn"
import login from "../api/auth/login";
import InputFieldBox from "../components/input_field/input_field_box";
import ToastContainerCustom from "../components/toasts/toast_container_custom";
import { Link } from "react-router";

function Login() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    return (
        <div className={`lg:pt-16 w-full h-screen lg:grid lg:grid-cols-2`}>
            <div className={`min-h-fit h-full lg:px-16 flex flex-col justify-center items-center lg:items-start gap-y-4`}>
                <h1 className={`font-bold text-2xl text-text`}>Login</h1>
                <InputFieldBox type="email" handleChange={handleEmailChange} id="Email" />
                <InputFieldBox type="password" handleChange={handlePasswordChange} id="Password" />
                <div className={`h-1`} />
                <BlockBtn title={"Login"} action={() => login({email, password})} />
                <span className={`text-sm`}>Don't have an account? <Link to="/signup" className={`text-primary underline font-semibold`}>Sign up now!</Link></span>
            </div>
            <div className={`hidden lg:flex justify-center items-center`}>
                <img src="/Walk in the city-rafiki.png" alt="Hello" className={`w-100`}/>
            </div>
            <ToastContainerCustom />
        </div>
    )
}

export default Login