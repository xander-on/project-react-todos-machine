import { useEffect, useReducer } from "react";


export const useLocalStorage = ( itemName, initialValue, delay=0 ) => {

    const [state, dispatch] = useReducer(reducer, initialState({initialValue}));
    const {error, loading, items} = state;


    //ACTIONS CREATORS
    const onError = (error) => dispatch({
        type   : actionTypes.error,
        payload: error
    });

    const onSuccess = (item) => dispatch({
        type   : actionTypes.success,
        payload: item
    });

    const onSave = (item) => dispatch({
        type   : actionTypes.save,
        payload: item
    });

    
    useEffect(() => {
        setTimeout(()=>{
            try{
            
                const localStorageItem = localStorage.getItem(itemName);
                let itemValue;
    
                if( !localStorageItem ){
                    localStorage.setItem( itemName, JSON.stringify(initialValue) );
                    itemValue = initialValue;
                }else{
                    itemValue = JSON.parse( localStorageItem );
                    if (!itemValue) {
                        itemValue=[];
                        throw new Error('Error al obtener los datos');
                    }
                    onSuccess(itemValue);
                }
    
            }catch(error){
                onError(error);
            }    
        },delay);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);

    
    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        onSave(newItem);
    }


    return {
        items,
        saveItems,
        loading,
        error,
    };
}


const initialState = ({ initialValue }) => ({
    error  :false,
    loading:true,
    items   :initialValue,
});


const actionTypes = {
 error    : 'ERROR',
 success  : 'SUCCESS',
 save     : 'SAVE',
}

const reuducerObject = (state, payload) => ({
    [actionTypes.error]:{
        ...state,
        error:true,
    },

    [actionTypes.success]:{
        ...state,
        error  :false,
        loading:false,
        items   :payload,
    },

    [actionTypes.save]:{
        ...state,
        items  :payload,
    }
});

const reducer = (state, action) => 
    reuducerObject(state, action.payload)[action.type] || state