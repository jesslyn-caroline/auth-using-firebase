import { useContext } from "react"
import { ProfileContext } from "../providers/profile_provider";
import BlockBtn from "../components/buttons/block_btn";
import signout from "../api/auth/signout";

function Home() {

    const { email } = useContext(ProfileContext);
    const { signOutfromAcc } = signout();

    return (
        <div className={`pt-16 flex flex-col gap-y-4`}>
            <h1 className={`font-bold text-xl text-text`}>Hello, {email}</h1>
            <div className={`w-30`}>
                <BlockBtn title={"Logout"} action={signOutfromAcc} />
            </div>
        </div>
    )
}

export default Home