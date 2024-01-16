import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitBtn, FeildInput } from "../Component";
import { toast } from "react-toastify";
import { userFetch } from "../Utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../Feature/User/UserSlice";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const newError = {};
    let isValid = true;

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

  let obj = {
    email,
    password,
  };

  const loginEvent = async () => {
    if (validate()) {
      try {
        const response = await userFetch.post("/auth/login", obj);
        console.log(1, response);
        const headers = {
          Authorization: `Bearer ${response.data.access_token}`,
        };
        const res = await userFetch.get("/auth/profile", { headers });
        console.log(res.data);
        dispatch(userLogin({ userData: res.data }));
        navigate("/");
        toast.success(`${res.data.name} logged succesfully`);
      } catch (error) {
        let arr = error.response.data;
      console.log(error);
      if(arr.statusCode === 401){
        console.log(arr.message)
        toast.error("wrong email id or password");
      }
      }
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-control shadow-lg-dark">
          <h4 className="text-center text-3xl font-weight-bold auth-heading">
            Login
          </h4>
          <div className="mt-4">
            <FeildInput
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={error?.emailError}
            />
          </div>
          <div className="mt-4">
            <FeildInput
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={error?.passwordError}
            />
          </div>
          <div className="mt-4 text-center">
            <SubmitBtn text="Login" onClick={loginEvent} />
          </div>
          <div className="auth-section mt-3 text-dark text-center">
            <p>Not a member yet?</p>

            <Link to="/register" className="ml-2 text-primary custom-link-auth">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

/* 

<section className="h-100 d-flex align-items-center justify-content-center">
        <div className="card w-25 p-4 bg-light shadow-lg">
          <h4 className="text-center text-3xl font-weight-bold">Login</h4>


          <section className="login-container">
        <div className="card input-control">
          <h4 className="text-center text-3xl font-weight-bold">Login</h4>
          <div className="mt-4" >
          <FeildInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          </div>
          <div className="mt-4" >
          <FeildInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          </div>
          <SubmitBtn text="Login" onClick={loginEvent} />
          <p className="text-center mt-3">
            Not a member yet?
            <Link to="/userRegister" className="ml-2 text-primary">
              Register as User
            </Link>
            <Link to="/adminRegister" className="ml-2 text-primary">
              Register as Admin
            </Link>
          </p>
        </div>
      </section>

*/
