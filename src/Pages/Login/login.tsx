import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LoginData, SignUpData } from '../../types'

const Login: React.FC = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

 
  const [signUpData, setSignUpData] = useState<SignUpData>({
    username: "",
    email: "",
    password: "",
    contactNo: "",
    isWhatsApp: false,
    lookingAs: "",
  });

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignUpChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setSignUpData({ ...signUpData, isWhatsApp: value === "yes" });
    } else {
      setSignUpData({ ...signUpData, [name]: value });
    }
  };

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    // Add login API call here
  };

  const handleSignUpSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Sign Up Data:", signUpData);
    // Add signup API call here
  };

  return (
    <div className={`${styles.container} ${isSignUpMode ? styles["sign-up-mode"] : ""}`}>
      <div className={styles["forms-container"]}>
        <div className={styles["signin-signup"]}>
          {/* Sign In Form */}
          <form className={styles["sign-in-form"]} onSubmit={handleLoginSubmit}>
            <div className={styles.title}>Sign in</div>
            <div className={styles["input-field"]}>
              <FontAwesomeIcon icon={faUser} />
              <input type="text" name="username" placeholder="Username" value={loginData.username} onChange={handleLoginChange} />
            </div>
            <div className={styles["input-field"]}>
              <FontAwesomeIcon icon={faLock} />
              <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />
            </div>
            <input type="submit" value="Login" className={`${styles.btn} ${styles.solid}`} />
          </form>

          {/* Sign Up Form */}
          <form className={styles["sign-up-form"]} onSubmit={handleSignUpSubmit}>
            <div className={styles.title}>Sign up</div>
            <div className={styles["input-field"]}>
              <FontAwesomeIcon icon={faUser} />
              <input type="text" name="username" placeholder="Username" value={signUpData.username} onChange={handleSignUpChange} />
            </div>
            <div className={styles["input-field"]}>
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleSignUpChange} />
            </div>
            <div className={styles["input-field"]}>
              <FontAwesomeIcon icon={faLock} />
              <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleSignUpChange} />
            </div>

            {/* Contact Number Field */}
            <div className={styles["input-field"]}>
              <FontAwesomeIcon icon={faUser} />
              <input type="text" name="contactNo" placeholder="Contact No" value={signUpData.contactNo} onChange={handleSignUpChange} />
            </div>

            {/* Is WhatsApp No Checkbox */}
            <div className={styles["checkbox-field"]}>
              <label>Is this your WhatsApp No?</label>
              <div>
                <label>
                  <input type="radio" name="whatsapp" value="yes" checked={signUpData.isWhatsApp} onChange={handleSignUpChange} />
                  Yes
                </label>
                <label>
                  <input type="radio" name="whatsapp" value="no" checked={!signUpData.isWhatsApp} onChange={handleSignUpChange} />
                  No
                </label>
              </div>
            </div>

            {/* Dropdown for Looking As */}
            <div className={styles["input-field"]}>
              <label className={styles.label} htmlFor="lookingAs">Looking As</label>
              <select id="lookingAs" name="lookingAs" className={styles.dropdown} value={signUpData.lookingAs} onChange={handleSignUpChange}>
                <option value="" disabled>Select an option</option>
                <option value="Dealer">Dealer</option>
                <option value="Contractor">Contractor</option>
                <option value="Self Home Decor">Self Home Decor</option>
              </select>
            </div>

            <input type="submit" className={styles.btn} value="Sign up" />
          </form>
        </div>
      </div>

      <div className={styles["panels-container"]}>
        <div className={`${styles.panel} ${styles["left-panel"]}`}>
          <div className={styles.content}>
            <h3>New here?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={() => setIsSignUpMode(true)}>Sign up</button>
          </div>
          <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className={styles.image} alt="Sign up illustration" />
        </div>
        <div className={`${styles.panel} ${styles["right-panel"]}`}>
          <div className={styles.content}>
            <div>One of us?</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={() => setIsSignUpMode(false)}>Sign in</button>
          </div>
          <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className={styles.image} alt="Sign in illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;



