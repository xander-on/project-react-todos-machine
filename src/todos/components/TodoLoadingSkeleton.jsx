
import '../styles/todoItemSkeleton.css';

const TodoItemSkeleton = () => {
    return (
        <div className="LoadingTodo-container">
          <span className="LoadingTodo-completeIcon">
          </span>
          <span className="LoadingTodo-text">
            <p></p>
          </span>
          <span className="LoadingTodo-deleteIcon">
          </span>
        </div>
    );
  }


export const TodoLoadingSkeleton = () =>{
    return (
        <>
            <TodoItemSkeleton />
            <TodoItemSkeleton />
            <TodoItemSkeleton />
            <TodoItemSkeleton />
        </>
    );    
}