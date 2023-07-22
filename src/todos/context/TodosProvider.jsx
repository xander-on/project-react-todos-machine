import { useState } from 'react';
import { TodosContext } from './';
import { useLocalStorage } from '../../hooks';
import { getTodos, handlerTodos, searchTodos } from "../helpers";


export const TodosProvider = ({ children }) => {

    const { 
        items:todos, 
        saveItems:saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [], 3000);

    const [ searchValue, setSearchValue ]       = useState('');
    const [ openModal, setOpenModal ]           = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const dataTodosLocalStorage = { todos, saveTodos, loading, error };
    const searchValueState      = { searchValue, setSearchValue };
    const openModalTodosState   = { openModal, setOpenModal };
    const openModalDeleteState  = { openModalDelete, setOpenModalDelete };

    const { totalTodos, completedTodos, todosAvailable} = getTodos(todos);
    const { addTodo, completeTodo, deleteTodo }         = handlerTodos(dataTodosLocalStorage);
    const { searchedTodos } = searchTodos(todosAvailable, searchValue);
    
    const dataTodos    = { totalTodos, completedTodos, searchedTodos };
    const actionsTodos = { addTodo, completeTodo, deleteTodo };

    return(
        <TodosContext.Provider value={{
            searchValueState,
            openModalTodosState,
            openModalDeleteState,
            dataTodosLocalStorage,
            dataTodos,
            actionsTodos,
        }}>
            { children }
        </TodosContext.Provider>
    );
}