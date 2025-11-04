import SwitchModeBtn from "./buttons/switch_mode_btn"

function Navbar() {
    return (
        <div className={`w-full min-h-16 h-16 bg-bg flex flex-row items-center justify-end px-6 lg:px-10 fixed`}>
            <SwitchModeBtn />
        </div>
    )
}

export default Navbar