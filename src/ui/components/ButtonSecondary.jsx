import '../styles/ButtonSecondary.css';

export const ButtonSecondary = ({ text, action }) => {

    return (
        <button 
            className={"Modal-button Modal-button--cancel"}
            onClick  ={ action }
        >
            {text}
        </button>
    );
}
