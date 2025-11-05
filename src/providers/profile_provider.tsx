import { createContext, useState } from "react";

export const ProfileContext = createContext<{
    email: string,
    changeLoginStatus: (email: string) => void
}>({
    email: "",
    changeLoginStatus: (email: string) => { console.log(email) }
});

function ProfileProvider({ children } : { children: React.ReactNode }) {

    const [email, setEmail] = useState<string>(() => {
        const savedEmail = localStorage.getItem("email");
        return savedEmail || "";
    });

    function changeLoginStatus(email: string) {
        setEmail(email);
        localStorage.setItem("email", email);
    }

    return (
        <ProfileContext.Provider value={{email, changeLoginStatus}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider