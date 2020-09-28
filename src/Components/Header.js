import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b p-2 flex justify-between item-center">
      <span className="font-bold">App Header</span>
      <Navigation />
    </header>
  );
}

export default Header;
