import { useContext } from 'react';
import '../styles/createTodoButton.css';
import { TodosContext } from '../context';

export const CreateTodoButton = () => {
    const { 
        openModalTodosState: {setOpenModal, openModal}, 
    } = useContext(TodosContext);

    
    const handlerOpenModal = () => setOpenModal(state => !state)

    return (
        <button 
            className={`CreateTodoButton ${openModal ? 'active': ''}`}
            onClick  ={ handlerOpenModal }
        >
            +
        </button>
    );
}
