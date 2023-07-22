import { useContext, useState } from 'react';
import { TodosContext } from '../context';
import { ModalContainer } from '../../ui'; 
import '../styles/todoForm.css';


export const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState('');

    const { 
        openModalTodosState:{ openModal, setOpenModal },
        actionsTodos  :{ addTodo } 
    } = useContext( TodosContext );

    const isDescriptionValid = (newTodoValue.length >= 2) ? true : false;

    const onSubmit = (event) => {
        event.preventDefault();
        if(!isDescriptionValid) return;
        addTodo(newTodoValue.trim());
        setOpenModal(false);
        setNewTodoValue('');
    };
    
    const onCancel = () => {
        setNewTodoValue('');
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (

        <ModalContainer 
            openModal         = { openModal } 
            title             = {'Agrega un nuevo Todo'}
            actionPrimary     = { onSubmit }
            actionSecondary   = { onCancel }
            isDisabledButton  = {!isDescriptionValid}
        >
            <form >
        
                <textarea 
                    name     = "newTodoDescription" 
                    value    = {newTodoValue}
                    onChange = {onChange}
                ></textarea>

            </form>
        </ModalContainer>
            
        
    );
}
