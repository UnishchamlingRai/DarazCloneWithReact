import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>Welcome to Daraz! Please login.</h2>
      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="phoneEmail">Phone Number or Email*</label>
          <input
            type="text"
            id="phoneEmail"
            name="phoneEmail"
            placeholder="Please enter your Phone Number or Email"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Please enter your password"
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          LOGIN
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
