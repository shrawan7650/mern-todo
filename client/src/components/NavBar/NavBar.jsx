import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import { SideBar } from "./sidenav";
import { useState } from "react";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
<>
<nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        position: "relative",
      
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/">Show Todo</NavLink>
            <NavLink to="/create-todo">Create Todo</NavLink>
            <NavLink to="/update-todo">Update Todo</NavLink>
          </div>
        </div>
      </div>
    </nav>
      <SideBar closeHandler={closeHandler} isOpen={isOpen} />
</>
  );
};
export default NavBar;
