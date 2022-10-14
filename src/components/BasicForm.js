import useInput from "../Hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formValidation = false;
  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formValidation = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formValidation) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  const firstnameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={firstnameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          value={enteredFirstName}
          onBlur={firstNameBlurHandler}
          onChange={firstNameChangeHandler}
        />
        {firstNameInputHasError && (
          <p className="error-text">Please Enter a Valid FirstName</p>
        )}
      </div>
      <div className={lastNameInputClasses}>
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="name"
          value={enteredLastName}
          onBlur={lastNameBlurHandler}
          onChange={lastNameChangeHandler}
        />
        {lastNameInputHasError && (
          <p className="error-text">Please Enter a Valid LastName</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please Enter a Valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValidation}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
