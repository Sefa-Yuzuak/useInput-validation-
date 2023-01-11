import { useState } from 'react';

const useValid = (inputValidation) => {
    const[enteredValue, setEnteredValue] = useState('');
    const[inputTouched, setInputTouched] = useState (false);

    const changeInputHandler = (event) => {
        setEnteredValue(event.target.value)
    };
    const blurInputHandler = () => {
        setInputTouched(true);
    };

    const inputIsvalid = inputValidation(enteredValue); //most important part.

    const inputHasError = !inputIsvalid && inputTouched ;

    const inputErrorClass = inputHasError ? 'form-control invalid' : 'form-control'

    const reset = () => { 
       setEnteredValue('');
       setInputTouched(false); 
    };

    return {
        value: enteredValue,
        inputIsvalid,
        inputErrorClass,
        inputHasError,
        changeInputHandler,
        blurInputHandler,
        reset,
    }

};

export default useValid;