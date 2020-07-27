import React from "react";
import { Link } from "react-router-dom";

import '../SideDrawer/DrawerToggleButton';
import logo from "../../assets/logo.png";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";


const toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className='space'></div>
        <div className="toolbar_navigation-items">
          <ul>
            <li><Link className="a" to="/produse">Berea Noastra</Link></li>
            <li><a className="a" href="https://summerfest.md/">Evenimente</a></li>
            <li><Link className="a" to="/turul-berii">Turul Berii</Link></li>
            <li><Link className="a" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className='toolbar_toggle-button'>
          <DrawerToggleButton click={props.drawerToggleClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
