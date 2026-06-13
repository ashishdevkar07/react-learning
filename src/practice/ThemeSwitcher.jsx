import { useState } from "react";

function ThemeSwticherMode(){
    const[isdarkMode , setIsDarkMode] = useState(false)

    return (
        <div style={{
            backgroundColor: isdarkMode ? "black" : "white",
            color: isdarkMode ? "white" : "black"
        }}>
            <h2>
                {isdarkMode ? "Current Theme: Dark" : "Current Theme: Light"}
            </h2>
            <button onClick={() =>setIsDarkMode(!isdarkMode)}>
                {isdarkMode ? "Switch to :light" : "Switch to Dark"}
            </button>
        </div>
    )
}

export default ThemeSwticherMode  