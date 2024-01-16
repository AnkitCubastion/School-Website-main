import React from "react";
import { useState } from "react";
import { SubmitBtn, FeildInput } from "../Component";
import { Link,useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import {userFetch} from "../Utils"

const images = [
  "https://i.imgur.com/LDOO4Qs.jpg",
  "https://i.imgur.com/DTfowdu.jpg",
  "https://i.imgur.com/yhW6Yw1.jpg",
]

const Register = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState();
  let [val, setVal] = useState("customer");
  const navigate = useNavigate();

  const validate = () => {
    const newError = {};
    let isValid = true;

    if (!name.trim()) {
      newError.nameError = "Username is Required";
      isValid = false;
    } else if (name.length < 5) {
      newError.nameError = "Length of Name must greater than 4";
      isValid = false;
    } else {
      newError.nameError = "";
    }

    if (!email.trim()) {
      newError.emailError = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email) && email.length > 1) {
      newError.emailError = "Invalid Email format";
      isValid = false;
    } else {
      newError.emailError = "";
    }

    if (!password.trim() && password.length === 0) {
      newError.passwordError = "Password is Required";
      isValid = false;
    } else if (password.length < 4) {
      newError.passwordError = "Length of Password must greater than 4";
      isValid = false;
      console.log("hello");
    } else {
      newError.passwordError = "";
    }

    setError(newError);
    return isValid;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validate();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validate();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    validate();
  };

  const handleVal = (e) => {
    setVal(e.target.value);
  };


  let obj = {
    name,email,password,avatar:images[Math.floor(Math.random()*(3))],role:val
  }

  const registerEvent = async() => {
    if (validate()) {
      console.log(obj);
      
  try{
    const response = await userFetch.post("/users/",obj);
    console.log(response);
    toast.success("user succesfully registered");
    navigate("/login");
  }
  catch(error){
    let arr = error.response.data.message ;
    console.log(arr);
    for(let el of arr){
      toast.error(el);
    }
  }
    }
  };





  return (
    <>
      <div className="auth-register-container">
        <div className="auth-control shadow-lg-dark">
          <h4 className="text-center text-3xl font-weight-bold auth-heading">
            Register
          </h4>
          <div className="mt-2">
            <FeildInput
              label="Name"
              type="name"
              value={name}
              onChange={handleNameChange}
              error={error?.nameError}
            />
          </div>
          <div className="mt-2">
            <FeildInput
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={error?.emailError}
            />
          </div>
          <div className="mt-2">
            <FeildInput
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={error?.passwordError}
            />
          </div>
          <div className="mt-4">
            <select
              className="form-select form-select-sm bg-light text-dark"
              value={val}
              onChange={handleVal}
            >
              <option value={"customer"}>User</option>
              <option value={"admin"}>Admin</option>
            </select>
          </div>
          <div className="mt-2 text-center">
            <SubmitBtn text="Register" onClick={registerEvent} />
          </div>
          <div className="auth-section mt-2 text-dark text-center">
            <p>Already a Member</p>

            <Link to="/login" className="custom-link-auth">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
