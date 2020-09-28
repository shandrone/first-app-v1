import React, { useState } from "react";
//check install guide from https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

//menu className="fixed bg-gray-100 top-0 left-0 w-4/5 h-full z-50 shadow"
//mask className="bg-red-200 bg-opacity-75 fixed top-0 left-0 w-full h-full z-50"

function Navigation() {
  const [showMenu, setShowMenu] = useState(false); //menu bars needs to expand therefore we are using useState to set a current value so that we can change it later

  //this part of the code is taken from react-spring useTransition single-component
  const [show, set] = useState(false);
  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  //conditional HTML, showing 'Yo Man' only when showMenu status is true
  /*let menu;
  let menuMask;
  if (showMenu) {
    menu = ( //this is the menu that will show up 
      <p className="fixed bg-gray-100 top-0 left-0 w-4/5 h-full z-50 shadow">
        Yo Man
      </p>
    );

    menuMask = ( // this is for showing a faded backgroud effect when menu is open
      <div
        className="bg-red-200 bg-opacity-75 fixed top-0 left-0 w-full h-full z-50"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }
  */

  return (
    //setShowMenu(!showMenu) toggles the state eachtime the button is clicked
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="bg-red-200 bg-opacity-75 fixed top-0 left-0 w-full h-full z-50"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-gray-100 top-0 left-0 w-4/5 h-full z-50 shadow p-2"
            >
              <NavigationMenu closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
