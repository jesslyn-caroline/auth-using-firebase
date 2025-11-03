import SwitchModeBtn from "./buttons/switch_mode_btn"

function Navbar() {
    return (
        <div className={`w-full flex flex-row items-center justify-end`}>
            <SwitchModeBtn />
        </div>
    )
}

export default Navbar