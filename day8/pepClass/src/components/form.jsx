import React from 'react';

function Form() {
  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
