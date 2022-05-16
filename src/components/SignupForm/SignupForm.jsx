import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signupform.css";
import { useAuth } from "../../utils/auth";

const SignupForm = ({ userState, setUser }) => {
  const auth = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const { firstName, email, password, passwordConf } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signup = await auth.signup(firstName, email, password);

    console.log(signup);

    if (signup.error) {
      console.log(signup.error.message);
    } else {
      navigate("/");
    }
  };

  const isFormInvalid = () => {
    return !(firstName && email && password && password === passwordConf);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="sign-up-form-container"
    >
      <div className="sign-up-input-container">
        <label htmlFor="name"></label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={firstName}
          name="firstName"
          onChange={handleChange}
          placeholder="Name"
          className="sign-up-input"
        />
      </div>
      <div className="sign-up-input-container">
        <label htmlFor="email"></label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="sign-up-input"
        />
      </div>
      <div className="sign-up-input-container">
        <label htmlFor="password"></label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="sign-up-input"
        />
      </div>
      <div className="sign-up-input-container">
        <label htmlFor="confirm"></label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
          placeholder="Confirm Password"
          className="sign-up-input"
        />
      </div>
      <div className="sign-up-button-container">
        <button disabled={isFormInvalid()} className="sign-up-button">
          Create account
        </button>
      </div>
      <p className="have-account">
        Already have an account?{" "}
        <Link className="signin" to="/login">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
