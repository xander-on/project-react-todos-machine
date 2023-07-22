
export const getTodos = (todos) => {
    try{
        const todosAvailable = todos.filter( todo => !todo.deleted );
        const completedTodos = todosAvailable.filter( todo => !!todo.completed ).length;
        const totalTodos     = todosAvailable.length;
        return { completedTodos, totalTodos, todosAvailable }
    }catch(error){
        return error;
    }
    
}
