import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { ThemeModal } from ".";
import '../styles/ThemeButton.css';


export const ThemeButton = () => {

    const { 
        openModalThemeState: { setOpenModalTheme }
    } = useContext( ThemeContext );


    const openModal = () => setOpenModalTheme(true);

    return (
        <>
            <button onClick={ openModal } className="theme-button">
                <FontAwesomeIcon icon={faPalette} style={{fontSize:'20'}}/>
            </button>
            <ThemeModal />
        </>
    );
}
