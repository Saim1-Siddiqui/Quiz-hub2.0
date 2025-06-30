import React, { useState } from 'react';
import './Signup.css';

function SignUp() {
  const [email1, setemail1] = useState('');
  const [username1, setusername1] = useState('');
  const [password1, setpassword1] = useState('');
  const [agree, setAgree] = useState(false);

  // "Hardcoded" correct values
  const correctEmail = 'tahafaiz@gmail.com';
  const correctUsername = 'tahafaiz';
  const correctPassword = '1234';

  const handleSignup = (e) => {
    e.preventDefault();

    if (!agree) {
      alert('Please agree to the terms first.');
      return;
    }

    if (
      email1 === correctEmail &&
      username1 === correctUsername &&
      password1 === correctPassword
    ) {
      alert('✅ Your data is registered!');
    } else {
      alert('⚠️ Incorrect data or already exists.');
    }
  };

  return (
    <div className="container-signup">
      <h1 className="login-h1">Signup into Quiz-hub</h1>
      <form onSubmit={handleSignup}>
        <div className="inputall">
          <h1 className="login-email">Email</h1>
          <input
            className="input-login1"
            type="email"
            name="email"
            placeholder="Enter User Email"
            onChange={(e) => setemail1(e.target.value.trim())}
          />

          <h1 className="login-username">UserName</h1>
          <input
            className="input-login2"
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setusername1(e.target.value.trim())}
          />

          <h1 className="login-password">Password</h1>
          <input
            className="input-login3"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setpassword1(e.target.value.trim())}
          />
        </div>

        <div className="labelpro">
          <label className="label">
            <div className="checktick">
              <input
                className="checkbox1"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <p className="hello">I agree with all suggestions</p>
            </div>

            <button className="btn-signup" type="submit">
              Signup
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default SignUp;