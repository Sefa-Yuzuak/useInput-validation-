import { useState } from 'react'

const BasicForm = () => {

  const[enteredFirstName, setEnteredFirstName] = useState('');
  const[enteredLastName, setEnteredLastName] = useState('');
  const[enteredEmail, setEnteredEmail] = useState('');
  const[firstInputTouched, setFirstInputTouched] = useState (false)
  const[lastInputTouched, setLastInputTouched] = useState (false)
  const[emailInputTouched, setEmailInputTouched] = useState (false)

  const firstNameIsValid = enteredFirstName.trim() !== '';
  const lastNameIsValid = enteredLastName.trim() !== '';
  const emailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@') && enteredEmail.includes('.com') ;

  const firstInputInvalid = !firstNameIsValid && firstInputTouched ;
  const lastInputInvalid = !lastNameIsValid && lastInputTouched;
  const emailInputInvalid = !emailIsValid && emailInputTouched;

  let formValid = false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formValid = true;
  }
  console.log(firstInputInvalid, lastInputInvalid, emailInputInvalid);

  const formSubmitHandle = (event) => {
    event.preventDefault();

    setFirstInputTouched(true);
    setLastInputTouched(true);
    setEmailInputTouched(true);

    if(formValid){
      console.log('Form Submitted!')
      setEnteredFirstName('');
      setEnteredLastName('');
      setEnteredEmail('');
      setFirstInputTouched(false);
      setLastInputTouched(false);
      setEmailInputTouched(false);

    }else{
      return;
    }
  };

  const touchedFirstInputHandle = (event) => {
    setFirstInputTouched(true);
    setEnteredFirstName(event.target.value);
  };
  const touchedLastInputHandle = (event) => {
    setLastInputTouched(true);
    setEnteredLastName(event.target.value);
  };
  const touchedEmailInputHandle = (event) => {
    setEmailInputTouched(true);
    setEnteredEmail(event.target.value);
  };

  const firstNameErrorClass = firstInputInvalid ? 'form-control invalid' : 'form-control'
  const lastNameErrorClass = lastInputInvalid ? 'form-control invalid' : 'form-control'
  const emailErrorClass = emailInputInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandle}>
      <div className="control-group">
        <div className={firstNameErrorClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={touchedFirstInputHandle}
            onBlur={touchedFirstInputHandle}
            value={enteredFirstName}
            autoComplete
          />
          {firstInputInvalid && (
            <p className="error-text">First Name Must Not Be Empty!</p>
          )}
        </div>
        <div className={lastNameErrorClass}>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="name"
            id="last_name"
            onChange={touchedLastInputHandle}
            onBlur={touchedLastInputHandle}
            value={enteredLastName}
          />
          {lastInputInvalid && (
            <p className="error-text">Last Name Must Not Be Empty!</p>
          )}
        </div>
      </div>
      <div className={emailErrorClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={touchedEmailInputHandle}
          onBlur={touchedEmailInputHandle}
          value={enteredEmail}
        />
        {emailInputInvalid && (
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
