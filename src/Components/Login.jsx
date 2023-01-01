import React, {  useState } from "react";
import { auth, fs } from "../Config/Config.js";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { TextField } from "@mui/material";
import "../Styles/Form.css";
const Login = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...User, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(User.email, User.password).then(() => {
      swal({
        title: "Good job!",
        text: "You are logged in successfully",
        icon: "success",
      });
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      navigate("/dashboard");
    });
  };

  return (
    <div className="form">
      <div className="formHeader">Login Form</div>
      <form>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            onChange={handleChange}
          value={User.email}
          />
        </div>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Password"
          name="password"
            variant="outlined"
            type="password"
            onChange={handleChange}
            value={User.password}
          />
        </div>
     <Link to="/signup">   <p> Create Account</p></Link>
        <div className="loginBtn">
          <button className="submitBtn" type="submit" onClick={Submit}>
            Login
          </button>
        </div>
      </form>

    </div>

);
};

export default Login;
