import React from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";
const UserNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/user/history" className="nav-item">
          HISTORY
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/password" className="nav-item">
          PASSWORD
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/history" className="nav-item">
          WISHLIST
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
