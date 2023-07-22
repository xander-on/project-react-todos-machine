import { useContext, useState } from 'react';
import { TodosContext } from '../context';
import { LoadingResponse, ModalContainer } from '../../ui'; 
import '../styles/todoForm.css';


export const TodoDeleteConfirm = ({todo}) => {

    const { 
        openModalDeleteState:{ openModalDelete, setOpenModalDelete },
        actionsTodos  :{ deleteTodo } 
    } = useContext( TodosContext );

    const [confirmDelete, setConfirDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('Eliminar TODO');

    const onSubmit = () => {
        setLoading(true);
        deleteTodo(todo.id);
        setConfirDelete(true);
        setTitle('Eliminando TODO');

        setTimeout(() => {
            setLoading(false);
            setTitle('TODO eliminado');
        }, 2000);

        setTimeout(() => {
            setOpenModalDelete(false);
            setConfirDelete(false);
            setTitle('Eliminar TODO');
        }, 5000);
    };
    
    const onCancel = () => {
        setOpenModalDelete(false);
    };

    return (

        <ModalContainer 
            openModal         = { openModalDelete } 
            actionPrimary     = { onSubmit }
            actionSecondary   = { onCancel }
            textActionPrimary = {'Eliminar'}
            isActionsAvaible  = {!confirmDelete}
            title             = {title}
        >
            <TodoDeleteForm 
                todo={todo} 
                confirmDelete={confirmDelete} 
                loading={loading}
            />
        </ModalContainer>
            
        
    );
}



export const TodoDeleteForm = ({ todo, confirmDelete, loading }) => {

    return(
        <>
            { loading && (
                <form >
                    <LoadingResponse message='' />
                </form>
            )}

            { !confirmDelete && (
                <form >
                    <h3 style={{ textAlign: 'center', color: 'var(--color-text2)' }}>
                        <i><b>{todo.description}</b></i>
                    </h3>
                </form>
            )}

            {(!loading && confirmDelete) && (
                <form >
                    <h3 style={{ textAlign: 'center', color: 'var(--color-text2)' }}>
                        <i><b>{todo.description}</b></i>
                    </h3>
                </form>
            )}
        </>
    );
    
}
