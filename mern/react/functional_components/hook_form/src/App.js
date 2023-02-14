import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import style from './css/style.module.css'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div className="App">
      <div className={style.input}>
        <label htmlFor='firstName'>First Name: </label>
        <input id='firstName' onChange={e => setFirstName(e.target.value)}></input>
      </div>

      <div className={style.input}>
        <label htmlFor='lastName'>Last Name: </label>
        <input id='lastName' onChange={e => setLastName(e.target.value)}></input>

      </div>

      <div className={style.input}>
        <label htmlFor='email'>Email: </label>
        <input id='email' onChange={e => setEmail(e.target.value)}></input>

      </div>

      <div className={style.input}>
        <label htmlFor='password'>Password: </label>
        <input id='password' onChange={e => setPassword(e.target.value)}></input>

      </div>
      <div className={style.input}>
        <label htmlFor='confirmPassword'>Confirm Password: </label>
        <input id='confirmPassword' onChange={e => setConfirmPassword(e.target.value)}></input>

      </div>


      <p>Your Form Data</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
}

export default App;
