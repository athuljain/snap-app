import React from 'react';
import { Link } from 'react-router-dom';
import "./Dropdown.css"

function Dropdown() {
  return (
    <div className="dropdown">
      <li>
        <Link className="drop">Category</Link>
        <div className="sub-links">
          <Link to="/adidas">Adidas</Link>
          <Link to="/nike">Nike</Link>
          <Link to="/shoes" >Home</Link>
        </div>
      </li>
    </div>
  );
}

export default Dropdown;
