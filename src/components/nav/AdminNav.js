import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-item">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/product" className="nav-item">
          Product
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/products" className="nav-item">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/category" className="nav-item">
          Category
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/sub" className="nav-item">
          Sub Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-item">
          Coupon
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-item">
          Password
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
