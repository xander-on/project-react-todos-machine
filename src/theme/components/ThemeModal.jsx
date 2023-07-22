
import { useContext } from 'react';
import { ModalContainer } from '../../ui'; 
import { ThemeOptions } from ".";
import { ThemeContext } from '../context';


export const ThemeModal = () => {

    const { 
        openModalThemeState: {setOpenModalTheme, openModalTheme},
    } = useContext( ThemeContext );


    const onCancel = () => {
        setOpenModalTheme(false);
    }

    return (
        <ModalContainer 
            openModal       = { openModalTheme }
            title           = { 'Configuracion del tema' }
            actionSecondary = { onCancel }
            isActionsAvaible = { false }
        >
            <ThemeOptions />
        </ModalContainer>
    )
}
