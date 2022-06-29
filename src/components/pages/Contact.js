import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, message, and name
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    } else {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the message is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !message) {
      setErrorMessage('Email or message is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the name is not valid. If so, we set an error message regarding the name.
    }
    // if (!checkPassword(name)) {
    //   setErrorMessage(
    //     `Choose a more secure name for the account: ${message}`
    //   );
    //   return;
    // }
    alert(`Hello user!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setMessage('');
    setName('');
    setEmail('');
  };

  return (
    <div>
      <p>Hello user, if you would like to contact me, please enter your information below.</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
