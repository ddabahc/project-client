import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return user && user.token ? (
    <Outlet />
  ) : (
    <h1 className="text-dagner">Unauthorized Page... </h1>
  );
};

export default UserRoute;
