import React from "react";
import Header from "../../Components/Header/Header";
import { signInWithGoogle } from "../../firebase/utils";
import "./Login.scss";
const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="LoginForm">
      <Header />

      <form onSubmit={handleSubmit} className="LoginForm">
        <div className="googlebtn">
          <button type="submit" onClick={signInWithGoogle}>
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
