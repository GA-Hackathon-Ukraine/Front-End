import { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./signup.css";

const Signup = ({ userState, setUser }) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="masterDiv">
      <main className="create-account-container">
        <div className="titleDiv">
          <h1 className="create-account-title">Create an account</h1>
        </div>
        <div className="create-account-area">
          <h3 className="create-account-salutation">Welcome</h3>
          <p className="create-account-salutation-subtitle">
            create an account to continue
          </p>
          <SignupForm
            userState={userState}
            setUser={setUser}
            updateMessage={updateMessage}
          />
        </div>
      </main>
    </div>
  );
};

export default Signup;
