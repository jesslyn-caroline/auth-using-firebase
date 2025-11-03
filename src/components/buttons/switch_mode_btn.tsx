import { useState } from "react"

function SwitchModeBtn() {
    const [mode, setMode] = useState<string>(() => {
        const savedMode = localStorage.getItem('theme');
        return savedMode ? savedMode : 'light';
    });

    const toggleMode = () => {
        const newMode = (mode == 'light') ? 'dark' : 'light';

        setMode(newMode);
        
        let html = document.documentElement;
        html.setAttribute('data-theme', newMode);

        localStorage.setItem('theme', newMode);
    }

    return (
        <button className={`bg-primary text-white`} title="Switch Mode" onClick={toggleMode}>
            <i className={`${(mode == 'light' ? 'ri-moon-line' : 'ri-sun-line')} text-2xl `} />
        </button>
    )
}

export default SwitchModeBtn