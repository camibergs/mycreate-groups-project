import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header.jsx';
import './Login.scss';

function Login() {
  // Initialisation ------------------------------
  const navigate = useNavigate();

  // State ---------------------------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handlers ------------------------------------
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    console.log(email);

    if (email === 'K2990629@kingston.ac.uk') {
      console.log("Redirecting ... ");
      navigate('/students');
    }
    else if (email === 'G.Jones@kingston.ac.uk') {
      navigate('/lecturerview');
    }
  };

  // View ----------------------------------------
  return (
    <>
    <Header />
    <div className="loginCard">
      <h1>Log In</h1>
        <form className="loginForm" onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            name="email"
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="email">Password</label>
            <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="**********" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Log In</button>
        </form>
    </div>
  </>
  );
}

export default Login;