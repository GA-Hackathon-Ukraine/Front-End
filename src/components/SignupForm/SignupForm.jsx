import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signupform.css";
import { useAuth } from "../../utils/auth";
import { supabase } from "../../utils/supabaseClient";

const SignupForm = ({ msg, setMsg, userState, setUser }) => {
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
    if (password != passwordConf) {
      setMsg("your passwords do not match");
      return;
    }
    const signup = await auth.signup(firstName, email, password);

    

    if (signup.error) {
      setMsg(signup.error.message);
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
          required
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
          required
          type="email"
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
          required
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
          required
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
        <input
          type="submit"
          className="sign-up-button"
          value="Create account"
        />
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
