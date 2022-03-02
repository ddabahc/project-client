import React, { useState } from "react";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  // console.log(".env", process.env.REACT_APP_REGISTER_REDIRECT_URL);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const actionCodeSettings = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await sendSignInLinkToEmail(auth, email, actionCodeSettings);

    window.localStorage.setItem("emailForSignIn", email);

    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration 🍻`
    );
    window.localStorage.setItem("emailForRegistration", email);
    setEmail("");
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />

        <button type="submit" className="btn btn-outline-primary">
          Register
        </button>
      </form>
    );
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
