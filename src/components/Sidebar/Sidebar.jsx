// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Sidebar.css";
import { useRef } from "react";
import { Link } from 'react-router-dom';

// Sidebar takes in a list of elements to display as SidebarItems that have a name and onClick function
function Sidebar(props) {
  const elts = props.elts;

  const renderSidebarItems = elts => {
    const items = [];
    elts.forEach(elt => {
      items.push(<SidebarItem name={elt.name} onClick={elt.onClick} param={elt.param} />);
    })
    return items;
  }

  const sidebarItems = renderSidebarItems(elts);

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {sidebarItems}
      </ul>
    </div>
  );
}

function SidebarItem(props) {
  const SidebarItemRef = useRef();
  const onClick = props.onClick;

  return (
    <div className={"sidebar-item-container"}>
      <Link className={"sidebar-item-link"} onClick={() => props.param != null ? onClick(props.param) : onClick}>
        {props.name}
        <li className={"sidebar-item"} ref={SidebarItemRef}>
          {props.children}
        </li>
      </Link>
    </div>
  );
}

export default Sidebar;
