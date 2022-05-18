import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./login.css";

const LoginPage = ({ userState, setUser }) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="masterDiv">
      <main className="create-account-container">
        <div className="titleDiv">
          <h1 className="create-account-title">Log In</h1>
        </div>
        <div className="create-account-area">
          <h3 className="sign-in-salutation">Welcome</h3>
          <p className="sign-in-salutation-subtitle">Sign in to continue</p>
          <LoginForm
            setUser={setUser}
            userState={userState}
            updateMessage={updateMessage}
          />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
