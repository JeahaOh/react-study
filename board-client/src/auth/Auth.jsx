import React, { useState } from 'react';
import './style/login.css';

function Auth() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return account.length > 0 && password.length > 0;
  }

  function getToken() {
    console.log(account, password);
  }
  return (
    <>
      <div className="login_wrapper">
        <h1>LOGIN</h1>
        <form className="form" action="#">
          <div>
            <label>Account</label>
            <input
              autoFocus
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button disabled={!validateForm()} onClick={getToken}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Auth;
