import React, { useState } from "react";
import styles from "./LoginFormModal.module.css";

const LogIn = () => {
  const [inputs, setInputs] = useState("");
  const [inputsPassword, setInputsPassword] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();

    setInputs("");
    setInputsPassword("");
  };

  const formInputHandler = (e) => {
    setInputs(e.target.value);
  };
  const formInputHandlerPassword = (e) => {
    setInputsPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <div className={styles.backdrop}>
        <div className={styles.form}>
          <h2 className={styles.logInTxt}>Log in Codecademy</h2>
          <form>
            <label className={styles.emailPassword}>Email or username</label>
            <br />
            <input
              type="text"
              className={styles.input}
              value={inputs}
              onChange={formInputHandler}
            />
            <br />
            <label>password</label>
            <br />
            <input
              type="password"
              className={styles.input}
              value={inputsPassword}
              onChange={formInputHandlerPassword}
            />
            <p className={styles.password}>I forgot my password</p>
          </form>

          <button className={styles["logIn__btn"]} onClick={sumbitHandler}>
            Log in
          </button>

          <p className={styles.member}>
            Not a member yet ?
            <span className={styles["signUp__free"]}>Sign up for free</span>
            <p className={styles.exit}>Double Click Mouse to Exit!</p>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LogIn;
// <button onClick={props.onLogIn}>&times;</button>
