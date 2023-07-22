import { 
    TodoCounter, 
    TodoSearch, 
    TodoList, 
    CreateTodoButton,
    TodoForm
} from '../components';

import '../styles/TodosScreen.css';

export const TodosScreen = () => {   
    
    return (

        <div className='container todo-app' >
            <TodoCounter/>
            <TodoSearch />
            <TodoList />  
            <CreateTodoButton />
            <TodoForm/>
        </div>
    );
}
