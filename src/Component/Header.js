import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../Feature/User/UserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.userState);

  const handleLogout = () => {
    navigate("/");
    dispatch(userLogout());
  };

  return (
    <>
      <header className=" header-container py-2 text-dark">
        <div className=" align-element container d-flex justify-content-between align-items-center">
          {/* USER */}
          {user?.name ? (
            <div className="d-flex gap-4">
              <div className="link link-hover text-sm custom-link">
                Hello {user?.role === "customer" ? "User" : "Admin"} , {user?.name}
              </div>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex gap-4">
              <Link to="/login" className="link link-hover text-sm custom-link">
                Sign in
              </Link>
              <Link
                to="/register"
                className="link link-hover text-sm custom-link"
              >
                Create an Account
              </Link>
            </div>
          )}
          {/* LINKS*/}
        </div>
      </header>
    </>
  );
};

export default Header;
