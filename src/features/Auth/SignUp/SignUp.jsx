import React from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <h2>Create Your Account</h2>
      <form className={styles.signUpForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Please enter your phone number"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName">Full name*</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your first and last name"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="verificationCode">
            Verification Code from WhatsApp*
          </label>
          <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            placeholder="Verification Code"
          />
          <button type="button" className={styles.sendButton}>
            Send
          </button>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Minimum 6 characters with a number and a letter"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="birthday">Birthday</label>
          <div className={styles.birthdaySelect}>
            <select name="month" id="month">
              <option value="">Month</option>
              {/* Add month options */}
            </select>
            <select name="day" id="day">
              <option value="">Day</option>
              {/* Add day options */}
            </select>
            <select name="year" id="year">
              <option value="">Year</option>
              {/* Add year options */}
            </select>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="smsOptIn" name="smsOptIn" />
          <label htmlFor="smsOptIn">
            I'd like to receive exclusive offers and promotions via SMS
          </label>
        </div>
        <button type="submit" className={styles.signUpButton}>
          SIGN UP
        </button>
        <p className={styles.termsText}>
          By clicking "SIGN UP", I agree to Daraz's <a href="#">Terms of Use</a>{" "}
          and <a href="#">Privacy Policy</a>
        </p>
        <div className={styles.socialLogin}>
          <p>Or, sign up with</p>
          <button className={styles.facebookButton}>Facebook</button>
          <button className={styles.googleButton}>Google</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
