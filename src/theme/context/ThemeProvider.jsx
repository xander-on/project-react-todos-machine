import { useState } from 'react';
import { ThemeContext } from './';
import { useLocalStorage } from '../../hooks';

export const ThemeProvider = ({ children }) => {

    const { 
        items:themeData, 
        saveItems:saveThemeData,
        loading,
        error
    } = useLocalStorage('THEME_DATA', {isDarkMode:true, colorTheme: 'yellow'});

    const dataThemeLocalStorage = { themeData, saveThemeData, loading, error };
    // console.log(themeData)

    const [openModalTheme, setOpenModalTheme] = useState(false);
    const openModalThemeState = { openModalTheme, setOpenModalTheme }


    const setThemeApp = (xdarkMode, xcolorTheme) => {
        const body = document.querySelector('body');
        body.className = "";
        body.classList.add( xdarkMode ? 'darkmode' : 'lightmode' );
        body.classList.add(`color-${ xcolorTheme }`);
    }

    //carga inicial del tema
    setThemeApp(themeData.isDarkMode, themeData.colorTheme);
    
    return (
        <ThemeContext.Provider value={{
            openModalThemeState,
            dataThemeLocalStorage,
            setThemeApp
        }}>
            { children }
        </ThemeContext.Provider>
    );
}
