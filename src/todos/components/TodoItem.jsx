import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/todoItem.css';

export const TodoItem = ({ todo, onComplete, onDelete, openModalDelete }) => {

  const { description, completed } = todo;

  

  

  return (
    <>
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`}
          onClick={onComplete}
        >
          {
            <FontAwesomeIcon 
              icon ={ completed ? faCircleCheck : faCircle}
              className={ completed ? 'color-primary': ''  }
            />
          }
        </span>

        <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete': ''}`}>{ description }</p>
        
        <span 
          className='Icon Icon-delete'
          onClick={()=>openModalDelete(todo)}
        >
          <FontAwesomeIcon icon={faTrash}/>
        </span>
      </li>
    </>
  );
}
