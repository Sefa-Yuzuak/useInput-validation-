import useValid from '../hooks/use-valid';

// import { useState } from 'react' //silinecek

const BasicForm = (props) => {
  const {
    value: nameInputValue,
    inputIsValid: nameInputIsValid,
    inputHasError: nameInputHasError,
    inputErrorClass: nameInputErrorClass,
    changeInputHandler:nameChangeInputHandler,
    blurInputHandler: nameBlurInputHandler,
    reset: nemeResetInput,
  } = useValid(value => value.trim() !== '');
  const {
    value: lastNameInputValue,
    inputIsValid: lastNameInputIsValid,
    inputHasError: lastNameInputHasError,
    inputErrorClass: lastNameInputErrorClass,
    changeInputHandler:lastNameChangeInputHandler,
    blurInputHandler: lastNameBlurInputHandler,
    reset: lastNameResetInput,
  } = useValid(value => value.trim() !== '');
  const {
    value: emailInputValue,
    inputIsValid: emailInputIsValid,
    inputHasError: emailInputHasError,
    inputErrorClass: emailInputErrorClass,
    changeInputHandler:emailChangeInputHandler,
    blurInputHandler: emailBlurInputHandler,
    reset: emailResetInput,
  } = useValid(value => value.trim() !== '' && value.includes('@') && value.includes('.com'));

  // const[enteredFirstName, setEnteredFirstName] = useState(''); //silinecek
  // const[enteredLastName, setEnteredLastName] = useState('');
  // const[enteredEmail, setEnteredEmail] = useState('');
  // const[firstInputTouched, setFirstInputTouched] = useState (false)//silinecek
  // const[lastInputTouched, setLastInputTouched] = useState (false)
  // const[emailInputTouched, setEmailInputTouched] = useState (false)

  // const firstNameIsValid = enteredFirstName.trim() !== '';//silinecek
  // const lastNameIsValid = enteredLastName.trim() !== '';
  // const emailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@') && enteredEmail.includes('.com') ;

  // const firstInputInvalid = !firstNameIsValid && firstInputTouched ; //silinecek
  // const lastInputInvalid = !lastNameIsValid && lastInputTouched;
  // const emailInputInvalid = !emailIsValid && emailInputTouched;

  let formValid = false;
  if(nameInputIsValid && lastNameInputIsValid && emailInputIsValid){ //nameInputIsValid, lastNameInputIsValid, emailInputIsValid
    formValid = true;
  }

  const formSubmitHandle = (event) => {
    event.preventDefault();

    // setFirstInputTouched(true); //silinecek
    // setLastInputTouched(true);
    // setEmailInputTouched(true);

    if(formValid){
      console.log('Form Submitted!')
      // setEnteredFirstName(''); //resetInput
      // setEnteredLastName('');
      // setEnteredEmail('');
      // setFirstInputTouched(false); //resetInput
      // setLastInputTouched(false);
      // setEmailInputTouched(false);

      nemeResetInput(); //custom Hooktan geliyor
      lastNameResetInput();
      emailResetInput();

    }else{
      return;
    }
  };

  // const touchedFirstInputHandle = () => { //silinecek
    // setFirstInputTouched(true); //silinecek
  // };
  // const touchedLastInputHandle = () => {
  //   setLastInputTouched(true);
  // };
  // const touchedEmailInputHandle = () => {
  //   setEmailInputTouched(true);
  // };

  // const changeFirstInputHandle = (event) => { //silinecek
    // setEnteredFirstName(event.target.value); //silinecek
  // };
  // const changeLastInputHandle = (event) => {
  //   setEnteredLastName(event.target.value);
  // };
  // const changeEmailInputHandle = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const firstNameErrorClass = firstInputInvalid ? 'form-control invalid' : 'form-control' //silinecek
  // const lastNameErrorClass = lastInputInvalid ? 'form-control invalid' : 'form-control'
  // const emailErrorClass = emailInputInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandle}>
      <div>
        <h1>Validation Custom Hook</h1>
      </div>
      <div className="control-group">
        <div className={nameInputErrorClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeInputHandler}
            onBlur={nameBlurInputHandler}
            value={nameInputValue}
            autoComplete
          />
          {nameInputHasError && ( //inputHasError
            <p className="error-text">First Name Must Not Be Empty!</p>
          )}
        </div>
        <div className={lastNameInputErrorClass}>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="name"
            id="last_name"
            onChange={lastNameChangeInputHandler}
            onBlur={lastNameBlurInputHandler}
            value={lastNameInputValue}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name Must Not Be Empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputErrorClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeInputHandler}
          onBlur={emailBlurInputHandler}
          value={emailInputValue}
        />
        {emailInputHasError && (
            <p className="error-text">Email Field Must Not Be Empty, Must Include '@' and '.com' !</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
