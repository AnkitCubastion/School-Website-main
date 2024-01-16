import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-container">
        <div className="container">
          {/*Title */}
          <NavLink
            to="/"
            className="navbar-brand d-none d-lg-flex btn btn-success text-3xl"
          >
            FakeDB
          </NavLink>

          {/* Dropdown Toggle Button*/}
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary d-lg-none"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaBarsStaggered className="h-6 w-6" />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-sm mt-3"
              aria-labelledby="dropdownMenuButton"
            >
              <NavLinks />
            </ul>
          </div>
          {/*NavBar Links*/}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navlink-container">
              {/*NavBar Links for medium and large screen*/}

              <NavLinks />

              {/*End of NavBar Links for medium and large screen*/}
            </ul>
          </div>

          {/*NavBar End Section*/}
          <div className="navbar-end">
            {/*Theme Icons*/}

            {/*Cart Links*/}
            <NavLink
              to="/profile"
              className="btn btn-ghost btn-circle btn-md ml-4"
            >
              <div className="indicator">
                <CgProfile />
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
