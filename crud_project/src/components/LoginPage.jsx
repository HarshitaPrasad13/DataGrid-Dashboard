import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosAuthInstance";
import user_icon from "../assets/user.png";
import email_icon from "../assets/email.png";
import key from "../assets/key.png";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [LoginAction, SetLoginAction] = useState("Sign Up");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    if (loading) return;
    if (!email || !password || (LoginAction === "Sign Up" && !name)) {
      alert("Please fill in all required fields");
      return;
    }
    setLoading(true);
    try {
      const endpoint =
        LoginAction === "Login" ? "/auth/login" : "/auth/register";

      const res = await axios.post(endpoint, {
        email,
        password,
        ...(LoginAction === "Sign Up" && { name }),
      });

      alert(res.data.message);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_container">
      <div className="login_header">
        <div className="text">{LoginAction}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {LoginAction === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt=""></img>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt=""></img>
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={key} alt=""></img>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {LoginAction === "Login" ? (
        <div className="forgot_password">
          Forgot Password? <span>Click Here</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="submit_login">
        <div
          className={`login_submit ${LoginAction === "Login" || loading ? "disabled" : ""}`}

          onClick={() => {
            if (loading) return;
              if (LoginAction === "Sign Up") {
                handleSubmit();
              } else {
                SetLoginAction("Sign Up");
              }
            
          }}
        >
          Sign Up
        </div>
        <div
          className={`login_submit ${LoginAction === "Sign Up" || loading ? "disabled" : ""}`}

          onClick={() => {
            if (loading) return;
              if (LoginAction === "Login") {
                handleSubmit();
              } else {
                SetLoginAction("Login");
              }
            
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
