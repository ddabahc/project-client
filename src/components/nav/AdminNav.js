import React from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item mt-3">
        <Link to="/admin/dashboard" className="nav-item">
          Dashboard
        </Link>
      </li>
      <li className="nav-item mt-3">
        <Link to="/admin/product" className="nav-item">
          Product
        </Link>
      </li>
      <li className="nav-item mt-3">
        <Link to="/admin/products" className="nav-item">
          Products
        </Link>
      </li>
      <li className="nav-item mt-3">
        <Link to="/admin/category" className="nav-item">
          Category
        </Link>
      </li>
      <li className="nav-item mt-3">
        <Link to="/admin/sub" className="nav-item">
          Sub Category
        </Link>
      </li>

      <li className="nav-item mt-3">
        <Link to="/admin/coupon" className="nav-item">
          Coupon
        </Link>
      </li>

      <li className="nav-item mt-3">
        <Link to="/user/password" className="nav-item">
          Password
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
