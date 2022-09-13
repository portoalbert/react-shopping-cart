import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Skip the Lines</Link>
      </div>
      <div className="links">
        <Link to="/checkout">Cart({props.items})</Link>
      </div>
    </div>
  );
}

export default Navbar;
