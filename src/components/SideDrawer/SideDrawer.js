import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";
import Footer from '../Footer';

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link className="a" to="/produse">
            Berea Noastra
          </Link>
        </li>
        <li>
          <Link className="a" to="/evenimente">
            Evenimente
          </Link>
        </li>
        <li>
          <Link className="a" to="/turul-berii">
            Turul Berii
          </Link>
        </li>
        <li>
          <Link className="a" to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Footer className='side-footer' />
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
