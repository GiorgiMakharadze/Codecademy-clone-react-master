import React, { useState, useEffect, useRef } from "react";
import LogIn from "../Forms/LoginForm.modal";
import SignUp from "../Forms/SignupFormModal";
import styles from "./Header.module.css";

const Header = () => {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  let closeModalRef = useRef();

  useEffect(() => {
    const closeModals = (e) => {
      if (!closeModalRef.current.contains(e.target)) {
        setLogIn(false);
        setSignUp(false);
      }
    };
    document.addEventListener("dblclick", closeModals);

    return () => {
      document.removeEventListener("dblclick", closeModals);
    };
  }, []);

  const logInHandler = () => {
    setLogIn((prevLogIn) => !prevLogIn);
  };

  const signUpHandler = () => {
    setSignUp((prevSignUp) => !prevSignUp);
  };

  return (
    <React.Fragment>
      <header>
        <div className={styles.nav}>
          <img
            src="https://getlogovector.com/wp-content/uploads/2020/11/codecademy-logo-vector.png"
            className={styles["img__nav"]}
            alt="codecademy logo"
          />
          <div className={styles["nav__bar"]}>
            <a href="#">Catalog</a>
            <a href="#">Resources</a>
            <a href="#">Community</a>
            <a href="#">Pricing</a>
            <a href="#">Business Solutions</a>
          </div>
          <div className={styles["nav__btn"]} ref={closeModalRef}>
            <button className={styles["logIn__btn"]} onClick={logInHandler}>
              Log In
            </button>
            <button className={styles["signUp__btn2"]} onClick={signUpHandler}>
              Sing Up
            </button>
          </div>
        </div>
      </header>
      <div>
        {logIn && <LogIn />}
        {signUp && <SignUp />}
      </div>
    </React.Fragment>
  );
};

export default Header;
