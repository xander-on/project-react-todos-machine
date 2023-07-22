import { useContext } from 'react';
import { TodosContext } from '../context';
import '../styles/todoCounter.css';

export const TodoCounter = () => {

    const { dataTodos } = useContext( TodosContext );
    const { completedTodos, totalTodos } = dataTodos;

    return(
        <div className="TodoCounter">
            <h1 >
                Has completado 
                <span className='color-primary'> { completedTodos} </span> de 
                <span className='color-primary'> {totalTodos} </span> TODOS
            </h1>
        </div>
    );
}