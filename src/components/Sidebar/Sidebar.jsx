// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Sidebar.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import eboard from './icons/eboard.svg';
import academic from './icons/academic.svg';
import corporate from './icons/corporate.svg';
import graphicDesign from './icons/graphic-design.svg';
import social from './icons/social.svg';
import webDev from './icons/web-dev.svg';

function Sidebar({ onClick }) {
  return (
    <div className="sidebar">
      <div className="container">
        <div>
          <ul className="sidebar-menu">
            <SidebarItem
              imgSrc={eboard}
              name="Eboard"
              onClick={onClick}
            />
            <SidebarItem
              imgSrc={academic}
              name="Academic"
              onClick={onClick}
            />
            <SidebarItem
              imgSrc={corporate}
              name="Corporate"
              onClick={onClick}
            />
            <SidebarItem
              imgSrc={graphicDesign}
              name="Graphic Design"
              onClick={onClick}
            />
            <SidebarItem
              imgSrc={social}
              name="Social"
              onClick={onClick}
            />
            <SidebarItem
              imgSrc={webDev}
              name="Web Dev"
              onClick={onClick}
            />
            <SidebarItem
              imgSrc={eboard}
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
      <p>{props.name}</p>
      <li className={"sidebar-item"} ref={SidebarItemRef} onClick={() => setName(props.name)}>
        <Link
          className="icon-button">
          <img src={props.imgSrc} alt={props.name} />
        </Link>
        {props.children}
      </li>
    </div>
  );
}

export default Sidebar;
