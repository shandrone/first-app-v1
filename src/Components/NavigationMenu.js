import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-black text-blue-400 text-2xl">Hello Main Menu</div>

      <ul>
        <li>
          <Link to="/" className="text-blue-200" onClick={props.closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/numbergame"
            className="text-blue-200 border-b border-t block"
            onClick={props.closeMenu}
          >
            Number Game
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="text-blue-200 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
