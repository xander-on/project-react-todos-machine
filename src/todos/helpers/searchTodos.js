export const searchTodos  = (todosAvailable=[], searchValue) => {

    const searchedTodos = todosAvailable.filter( todo => 
        (
            todo.description.toLowerCase().includes(searchValue.toLowerCase()) 
            && !todo.deleted
        )
    );
    return {  searchedTodos }
}


