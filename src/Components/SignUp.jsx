import React, { useState } from "react";
import { TextField } from "@mui/material";
import "../Styles/Form.css";
import { useNavigate, Link } from "react-router-dom";
import { auth, fs } from "../Config/Config.js";

import swal from "sweetalert";

const SignUp = () => {
  const navigate = useNavigate();
  const [errMessage, seterrMessage] = useState();
  const [SuccessMsg, setSuccessMsg] = useState();
  const [User, setUser] = useState({
    name: "",
    email: "",
    phone: "",
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
    // console.log(User);
    // navigate("./");
    auth
      .createUserWithEmailAndPassword(User.email, User.password)
      .then((userData) => {
        fs.collection("users")
          .doc(userData.user.uid)
          .set({
            Name: User.name,
            Email: User.email,
            Phone: User.phone,
            Password: User.password,
          })
          .then(() => {
            swal({
              title: "Good job!",
              text: "Your account is created successfully",
              icon: "success",
            });
            navigate("/");

            setUser({
              name: "",
              email: "",
              phone: "",
              password: "",
            });
            setTimeout(() => {
              setSuccessMsg("");
              navigate("/login");
            }, 3000);
          })
          .catch((error) =>
            swal({
              icon: error,
              text: error.message,
              title: "Error!",
              type: "error",
            })
          );
      })
      .catch((error) => {
        swal({
          icon: error,
          text: error.message,
          title: "Error!",
          type: "error",
        });
      });
  };
  return (
    <div className="form">
      <div className="formHeader">Sign Up Form</div>
      <form method="POST">
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            name="name"
            label="Name"
            required
            type="text"
            onChange={handleChange}
            value={User.name}
          />
        </div>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            placeholder="Phone Number"
            name="phone"
            label="Phone"
            required
            type="number"
            onChange={handleChange}
            value={User.phone}
          />
        </div>

        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            onChange={handleChange}
            value={User.email}
            name="email"
          />
        </div>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={handleChange}
            value={User.password}
            name="password"
          />
        </div>

        <div className="signBtn">
          <button type="submit" onClick={Submit}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
