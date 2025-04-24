import { useState, useEffect } from 'react';
import ThemeBtn from './componenets/ThemeBtn'; // Ensure this path is correct
import Card from './componenets/Card'; // Ensure this path is correct
import { ThemeProvider } from './context/Theme'; // Ensure this path is correct

function App() {
    const [themeMode, setThemeMode] = useState("light");

    const lightMode = () => {
        setThemeMode("light");q
    };

    const darkMode = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
            <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-900">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Card />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <ThemeBtn />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
