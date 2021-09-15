// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Sidebar.css";
import { useRef } from "react";
import { Link } from 'react-router-dom';

function Sidebar({ onClick }) {
  return (
    <div className="sidebar">
      <div className="container">
        <div>
          <ul className="sidebar-menu">
            <SidebarItem
              name="Eboard"
              onClick={onClick}
            />
            <SidebarItem
              name="Academic"
              onClick={onClick}
            />
            <SidebarItem
              name="Corporate"
              onClick={onClick}
            />
            <SidebarItem
              name="Graphic Design"
              onClick={onClick}
            />
            <SidebarItem
              name="Social"
              onClick={onClick}
            />
            <SidebarItem
              name="Web Dev"
              onClick={onClick}
            />
            <SidebarItem
              name="Publicity"
              onClick={onClick}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

function SidebarItem(props) {
  const SidebarItemRef = useRef();
  const setName = props.onClick;

  return (
    <div className={"sidebar-item-container"}>
      <Link className={"sidebar-item-link"} onClick={() => setName(props.name)}>
        {props.name}
        <li className={"sidebar-item"} ref={SidebarItemRef}>
          {props.children}
        </li>
      </Link>
    </div>
  );
}

export default Sidebar;
