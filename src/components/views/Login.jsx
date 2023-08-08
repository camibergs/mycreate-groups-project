import { useState } from 'react';
import './Login.scss';

function Login() {
  // Initialisation ------------------------------

  // State ---------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handlers ------------------------------------
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    console.log(email);
  };

  // View ----------------------------------------
  return (
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
            onChange={(e) => setEmail(e.targetValue)} />

          <label htmlFor="email">Password</label>
            <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="**********" 
            value={password} 
            onChange={(e) => setPassword(e.targetValue)} />

          <button>Log In</button>
        </form>
    </div>
        
  );
}

export default Login;