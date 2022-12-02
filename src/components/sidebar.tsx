import React, { useContext } from "react";

import { SidebarData } from "./SideBarData";
import "./Sidebar.css";
import { Typography } from "@mui/material";
import logo from './personlogo.png';
import { relative } from "path";


const Sidebar: React.FC = () => {
    return (
        
      <div style={{ width: 250 }}>
        <img style={{ width: 80, height: 80, position: "relative", bottom: 30, top: 30, right: 80, color:'black' }} src={logo} alt="Person" />
        <ul className="sidebarRows">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={val.path === window.location.pathname ? "active" : ""}
                onClick={() => (window.location.pathname = val.path)}
              >
                <div id="iconContainer">{val.icon}</div>
  
                <div id="titleContainer">
                  <h3>{val.title}</h3>
                </div>
              </li>
            );
          })}
        </ul>
        <hr />
      </div>
    );
  };

  export default Sidebar;