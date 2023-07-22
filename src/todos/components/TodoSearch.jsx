import { useContext } from 'react';
import { TodosContext } from '../context';

import '../styles/todoSearch.css';

export const TodoSearch = () => {
    // const { searchValue, setSearchValue } = useContext( TodosContext ).searchValueState;
    const { 
        searchValueState: { searchValue, setSearchValue },
        dataTodos: {totalTodos}
    } = useContext( TodosContext );


    const inputChange = ( event ) => {
        const { value } = event.target;
        setSearchValue( value );
    }

    if( totalTodos < 2 ) return;

    return (
        
        <input 
            type       = "text" 
            placeholder= "Buscar un Todo" 
            className  = "TodoSearch"
            onChange   = { inputChange }
            value      = { searchValue }
        />
    );
}
