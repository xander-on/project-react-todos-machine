

export const handlerTodos = ({todos, saveTodos}) => {

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            id          : todos.length + 1,
            description : text,
            completed   : false,
            deleted     : false
        });
        saveTodos(newTodos);
    };

    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id-1].completed = !newTodos[id-1].completed;
        saveTodos( newTodos );
    }
    
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id-1].deleted = true;
        saveTodos( newTodos );
    }
    
    return { completeTodo, deleteTodo, addTodo };
} 