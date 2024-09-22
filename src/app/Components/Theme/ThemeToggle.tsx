import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const { useState, useEffect } = require("react")

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState();

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            if (theme === 'dark') {
                setDarkMode(true)
            }
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light")
        }
    }, [darkMode]);


    return (
        <div
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer relative w-14 h-6 md:w-16 md:h-8 flex items-center  dark:bg-gray-600 border border-white bg-blue-500 rounded-full p-1">
            <FaMoon className="text-white" size={18} />
            <div className="mx-1 absolute bg-white w-4 h-4 md:w-5 md:h-6 rounded-full shadow-md transform transition-transform duration-300"
                style={darkMode ? { left: "2px" } : { right: "2px" }}
            ></div>

            <IoMdSunny className="ml-auto text-yellow-300 " size={18} />
        </div>
    )
}

export default ThemeToggle;