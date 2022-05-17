import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginform.css";
import { useAuth } from "../../utils/auth";

const LoginForm = ({ userState, setUser }) => {
  const auth = useAuth();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signIn = await auth.login(formData.email, formData.pw);

    if (signIn.error) {
      setMessage(signIn.error.message);
    } else {
      setMessage("Welcome");
      navigate("/");
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="signin-form-container"
    >
      <div className="signin-input-container">
        <label hidden htmlFor="email"></label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="sign-in-input"
        />
      </div>
      <div className="signin-input-container">
        <label hidden htmlFor="password"></label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          placeholder="Password"
          onChange={handleChange}
          className="sign-in-input"
        />
      </div>
      <Link to="/">
        <p className="forgot-password">Forgot Password?</p>
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="signin-button">Sign In</button>
      </div>
      <p className="need-account">
        Don't have an account?{" "}
        <Link className="signup" to="/signup">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
