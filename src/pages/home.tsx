import { useContext } from "react"
import { ProfileContext } from "../providers/profile_provider";

function Home() {

    const { email } = useContext(ProfileContext);

    return (
        <div className={`pt-16 `}>
            <h1 className={`font-bold`}>Hello, {email}</h1>
        </div>
    )
}

export default Home