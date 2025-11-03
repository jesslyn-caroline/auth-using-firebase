import { useState } from "react"

function SwitchModeBtn() {
    let html = document.documentElement;

    const [mode, setMode] = useState<string>(() => {
        let savedMode = localStorage.getItem('theme');
        
        if (!savedMode) savedMode = 'light';
        html.setAttribute('data-theme', savedMode);

        return savedMode;
    });

    const toggleMode = () => {
        const newMode = (mode == 'light') ? 'dark' : 'light';

        setMode(newMode);
        html.setAttribute('data-theme', newMode);

        localStorage.setItem('theme', newMode);
    }

    return (
        <button className={`w-9 h-9 rounded-md flex items-center justify-center bg-primary text-white`} title="Switch Mode" onClick={toggleMode}>
            <i className={`${(mode == 'light' ? 'ri-moon-line' : 'ri-sun-line')} text-2xl `} />
        </button>
    )
}

export default SwitchModeBtn