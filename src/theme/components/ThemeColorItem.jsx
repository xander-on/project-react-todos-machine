import { useContext } from "react";
import { ThemeContext } from "../context";
import '../styles/ThemeColorItem.css';

export const ThemeColorItem = ({ color }) => {

    const { 
        dataThemeLocalStorage: { themeData, saveThemeData },
        setThemeApp
    } = useContext( ThemeContext );

    const handleOptionChange = (event) => {
        const newColor = event.target.value;
        const newThemeData = {...themeData, colorTheme: newColor };
        setThemeApp(themeData.isDarkMode, newColor);
        saveThemeData(newThemeData);
    }

    const isSelectedColor = themeData.colorTheme === color.name ? 'isSelectedColor' : '';


    return (
        <>
            <input 
                type    = "radio" 
                id      = {color.name} 
                name    = "colorOptions" 
                value   = {color.name}
                onChange= { handleOptionChange }
            />
            <label 
                htmlFor  ={ color.name } 
                style    ={{ background:color.color, marginRight:12 }}
                className={ isSelectedColor }
            >
            </label>
        </>
    );
}
