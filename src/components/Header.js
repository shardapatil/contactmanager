import React from "react";
import { Link } from 'react-router-dom';
 import './CSS/Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div id='Headercontainer' className="header-container ui-fixed menu">
      <div className="ui container center">
        <h2 id='Headerh2' style={{ textAlign: "center" }}>Contact Manager</h2>
        <Link id='Headerlink' to="/" className="btn btn-outline-danger">Logout</Link>
      </div>
    </div>
  );
};

export default Header;
