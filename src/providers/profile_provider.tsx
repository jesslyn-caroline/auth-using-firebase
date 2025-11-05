import { createContext, useState } from "react";

export const ProfileContext = createContext<{
    email: string,
    login: (email: string) => void,
    logout: () => void
}>({
    email: "",
    login: (email: string) => console.log(email),
    logout:() => console.log("logout")
});

function ProfileProvider({ children } : { children: React.ReactNode }) {

    const [email, setEmail] = useState<string>(() => {
        const savedEmail = localStorage.getItem("email");
        return savedEmail || "";
    });

    function login(email: string) {
        setEmail(email);
        localStorage.setItem("email", email);
    }

    function logout() {
        setEmail("");
        localStorage.setItem("email", "");
    }

    return (
        <ProfileContext.Provider value={{email, login, logout}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider