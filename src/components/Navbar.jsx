import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/about"}>
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/contact-us"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
