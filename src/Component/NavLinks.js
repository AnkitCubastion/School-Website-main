import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/faculties", text: "Faculty" },
  { id: 3, url: "/classes", text: "Classes" },
  { id: 4, url: "/results", text: "Result" },
  { id: 5, url: "/about", text: "AboutUs" },
  { id: 6, url: "/notices", text: "Notices" },
  { id: 7, url: "/recruitment", text: "Recruitment"},
];

const NavLinks = () => {
  return (
    <> 
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              to={url}
              className="text-capitalize text-success navbar-text"
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
