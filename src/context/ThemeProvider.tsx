import React, { useState } from "react";

export const themes = {
    light: {
        background: '#fff',
    },
    dark: {
        background: '#00000025',
    },
};

// Create context
export const ThemeContext = React.createContext({
    themeMode: 'light',
    handleChangeTheme: (theme: string) => { },
    defaultColors: themes.light
})

const ThemeProvider: React.FC<any> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<string>('light')
    const handleChangeTheme = (theme: string) => {
        console.log("test1", theme)
        if (theme === "dark") {
            setThemeMode('dark');
        } else {
            setThemeMode('light');
        }
    };
    let defaultColors
    if (themeMode === "dark") {
        defaultColors = themes.dark;
    } else {
        defaultColors = themes.light;
    }
    return (
        <ThemeContext.Provider value={{ themeMode, handleChangeTheme, defaultColors }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider