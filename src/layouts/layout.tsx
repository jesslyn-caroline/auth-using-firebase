import { Outlet } from "react-router"
import Navbar from "../components/navbar"

function Layout() {
    return (
        <div className={`max-w-[1920px] min-h-screen w-screen h-fit flex flex-col`}>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout