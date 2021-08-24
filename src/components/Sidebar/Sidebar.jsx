// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Sidebar.css";
import { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import eboard from './icons/eboard.svg';
import academic from './icons/academic.svg';
import corporate from './icons/corporate.svg';
import graphicDesign from './icons/graphic-design.svg';
import social from './icons/social.svg';
import webDev from './icons/web-dev.svg';

function Sidebar({ parentCallback }) {
  parentCallback('two');

  return (
    <div className="sidebar">
      <div className="container">
        <div>
          <ul className="sidebar-menu">
            <SidebarItem
              imgSrc={eboard}
              name="Eboard"
              onClick={parentCallback}
            />
            <SidebarItem
              imgSrc={academic}
              name="Academic"
            />
            <SidebarItem
              imgSrc={corporate}
              name="Corporate"
            />
            <SidebarItem
              imgSrc={graphicDesign}
              name="Graphic Design"
            />
            <SidebarItem
              imgSrc={social}
              name="Social"
            />
            <SidebarItem
              imgSrc={webDev}
              name="Web Dev"
            />
            <SidebarItem
              imgSrc={eboard}
              name="Publicity"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

function SidebarItem(props) {
  const SidebarItemRef = useRef();
  const setPageName = props.onClick;
  console.log(props.name, " clicked");
  console.log(typeof (props.onClick));

  return (
    <div className={"sidebar-item-container"}>
      <p>{props.name}</p>
      <li className={"sidebar-item"} ref={SidebarItemRef}>
        <Link
          className="icon-button"
          to={props.target}
        >
          <img src={props.imgSrc} alt={props.name} />
        </Link>
        {props.children}
      </li></div>
  );
}

export default withRouter(Sidebar);
