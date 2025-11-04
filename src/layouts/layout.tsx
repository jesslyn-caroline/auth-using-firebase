import { Outlet } from "react-router"
import Navbar from "../components/navbar"

function Layout() {
    return (
        <div className={`max-w-[1920px] min-h-screen w-screen flex flex-col bg-bg`}>
            <Navbar />
            <div className={`min-h-fit grow px-6 lg:px-10`}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout