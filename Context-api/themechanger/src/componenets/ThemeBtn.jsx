import React from 'react';
import useTheme from '../context/Theme'; // Ensure this path is correct

export default function ThemeBtn() {
    const { darkTheme, lightTheme, themeMode } = useTheme(); // Use the useTheme hook

    const handleToggle = (event) => {
        const drkModeStatus = event.target.checked;
        if (drkModeStatus) {
            darkTheme(); // Call darkTheme function from context
        } else {
            lightTheme(); // Call lightTheme function from context
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={handleToggle}
                checked={themeMode === "dark"} // Check if the theme is dark
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle Theme</span>
        </label>
    );
}
