import React, { useState } from "react";
import styles from "./SignupModal.module.css";

const SignUp = (props) => {
  const [inputs, setSignUpInput] = useState("");
  const [inputsPassword, setSignUpInputPassword] = useState("");

  const signUpsubmitHandler = (e) => {
    e.preventDefault();

    setSignUpInput("");
    setSignUpInputPassword("");
  };

  const signuUpHandler = (e) => {
    setSignUpInput(e.target.value);
  };

  const signUpHandlerPassowrd = (e) => {
    setSignUpInputPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <div className={styles.backdrop}>
        <div className={styles.form}>
          <h2 className={styles.SignUpTxt}>Get started for free</h2>
          <form>
            <label className={styles.emailPassword}>Email</label>
            <br />
            <input
              type="text"
              className={styles.input}
              value={inputs}
              onChange={signuUpHandler}
            />
            <br />
            <label>password</label>
            <br />
            <input
              type="password"
              className={styles.input}
              value={inputsPassword}
              onChange={signUpHandlerPassowrd}
            />
          </form>

          <button
            className={styles["signUp__btn"]}
            onClick={signUpsubmitHandler}
          >
            Sign Up
          </button>

          <p className={styles["already__account"]}>
            By signing up for Codecademy, you agree to <br />
            Codecademy's
            <span className={styles["termsPolicy"]}> Terms of Service</span> &
            <span className={styles["termsPolicy"]}> Privace Policy</span>
          </p>
          <p className={styles["already__account"]}>
            Already have an account?
            <span className={styles["logIn__acc"]}> Log in</span>
            <p className={styles.exit}>Double Click Mouse to Exit!</p>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
