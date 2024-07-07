import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";


const Login = () => {
  const [userName,setUserName]=useState("emilys")
  const [password,setPassword]=useState("emilyspass")
  const {login, isLoading}=useLogin()

  function handelLogin(e){
    e.preventDefault()
    login({username:userName,password},{
      onSuccess: (user) => {
        setPassword("")
        setUserName("")
  },
  onError: (err) => {
    alert("password or username is incorrect")
  },
})
    
  }
  return (
    <div className={styles.loginContainer}>
      <h2>Welcome to Daraz! Please login.</h2>
      <form className={styles.loginForm} onSubmit={handelLogin}>
        <div className={styles.inputGroup}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Please enter your User Name"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Please enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.loginButton} disabled={isLoading}>
          {isLoading?"logging...": "Login"}
        </button>

        <div className={styles.socialLogin}>
          <p>Or, login with</p>
          <button className={styles.facebookButton}>Facebook</button>
          <button className={styles.googleButton}>Google</button>
        </div>
        <Link to={"/login"} className={styles.resetPassword}>
          Reset Your Password
        </Link>
        <p>
          New member?{" "}
          <Link to={"/signUp"} className={styles.registerLink}>
            Register here
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
