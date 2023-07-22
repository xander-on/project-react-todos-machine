import { useContext } from 'react';
import { ThemeContext } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/ThemeSwitch.css';


export const ThemeSwitch = () => {

    const { 
        dataThemeLocalStorage: { themeData, saveThemeData },
        setThemeApp
    } = useContext(ThemeContext);

    const handleDarkMode = () => {
        const newThemeData = {...themeData, isDarkMode: !themeData.isDarkMode}
        saveThemeData(newThemeData);
        setThemeApp(!themeData.isDarkMode, themeData.colorTheme);
    }

    return (
        <>  
            <div className="theme-switch-container">
                <h4 className='subtitle'>ThemeSwitch</h4>
                    
                <div className="dark-mode">
                    <span className="dark-mode-title">
                        <FontAwesomeIcon 
                            icon={themeData.isDarkMode ? faMoon : faSun}
                            fontSize={24}
                        />
                    </span>
                    <input 
                        onChange ={handleDarkMode} 
                        type     ="checkbox" 
                        className="checkbox" 
                        id       ="checkbox" 
                        checked  ={themeData.isDarkMode}
                    />
                    <label className="switch" htmlFor="checkbox" />
                </div>
                    
                
            </div>
        </>
    );
}
