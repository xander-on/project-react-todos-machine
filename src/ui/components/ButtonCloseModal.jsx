
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ButtonCloseModal.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const ButtonCloseModal = ({action}) => {
    return (
        <span onClick={action} className='btn-close-modal'>
            <FontAwesomeIcon 
                icon={faCircleXmark} 
                style={{fontSize:28}}
            />
        </span>
    );
}
