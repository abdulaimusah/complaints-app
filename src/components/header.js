import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

// page header

const Header = ({theme, setTheme}) => {

    
    // set and retrieve mode of toggler
    const [isDarkMode, setIsDarkMode] = 
       useState(theme === "light" ? false : true);

    // change theme when toggle is clicked
    const handleChange = (checked) => {
        setIsDarkMode(checked);
        checked ? setTheme("dark") : setTheme("light");
    }


    return (
        <div className="bg-cyan-700
        h-12 flex items-center justify-center
        flex-shrink-0" >
            <div>
                <DarkModeSwitch
                checked={isDarkMode}
                onChange={handleChange}
                sunColor="white" />
            </div>
        </div>
    )
}
export default Header;