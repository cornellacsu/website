// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Sidebar.css";
import { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "./icons/logo.png";
import home from "./icons/house-white.png";
import homeActive from "./icons/house-red.png";
import board from "./icons/officers-white.svg";
import boardActive from "./icons/officers-red.svg";
import sponsers from "./icons/donation-white.svg";
import sponsersActive from "./icons/donation-red.svg";
import resources from "./icons/resources-white.png";
import resourcesActive from "./icons/resources-red.png";

function Sidebar(props) {
  return (
    <div class="sidebar">
      Sidebar
    </div>
    // <nav className="navbar navbar-expand ">
    //   <div className="container">
    //     <div>
    //       <ul className="navbar-nav">
    //         <SidebarItem
    //           currentPath={props.location.pathname}
    //           target="/"
    //           name="Home"
    //           imgSrc={home}
    //           activeImgSrc={homeActive}
    //         />
    //         <SidebarItem
    //           currentPath={props.location.pathname}
    //           target="/board"
    //           name="Board"
    //           imgSrc={board}
    //           activeImgSrc={boardActive}
    //         />
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

function SidebarItem(props) {
  const [open, setOpen] = useState(false);
  const SidebarItemRef = useRef();

  // Click away to collapse the menu
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    const domNode = SidebarItemRef.current;

    if (!domNode || !domNode.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <li className={"sidebar-item"} ref={SidebarItemRef}>
      <Link
        className="icon-button"
        to={props.target}
        onClick={() => setOpen(!open)}>
        <img
          src={
            props.currentPath === props.target
              ? props.activeImgSrc
              : props.imgSrc
          }
          alt={props.name}
        />
      </Link>
      {open && props.children}
    </li>
  );
}

export default withRouter(Sidebar);
