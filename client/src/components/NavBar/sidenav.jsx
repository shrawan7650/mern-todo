/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

export const SideBar = ({ closeHandler,isOpen }) => {
  return (
    <div className={isOpen?'side_nav_container':'side_nav_container_close'}>
      <div className="side-navbar-nav">
        <NavLink to="/">Show Todo</NavLink>
        <NavLink to="/create-todo">Create Todo</NavLink>
       
      </div>
      <IoCloseSharp className="icon" onClick={closeHandler} />
    </div>
  );
};
