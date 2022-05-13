import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./login.css";

const LoginPage = ({ userState, setUser }) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <main className="sign-in-container">
      <div className="signin-header-box">
        <h1 className="signin-header-text">Sign In</h1>
      </div>
      <div className="sign-form-area">
        <h3 className="sign-in-salutation">Welcome</h3>
        <p className="sign-in-salutation-subtitle">Sign in to continue</p>
        {/* <p>{message}</p> */}
        <LoginForm
          // handleSignupOrLogin={props.handleSignupOrLogin}
          setUser={setUser}
          userState={userState}
          updateMessage={updateMessage}
        />
      </div>
    </main>
  );
};

export default LoginPage;
