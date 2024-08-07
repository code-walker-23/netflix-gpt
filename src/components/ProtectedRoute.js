// ProtectedRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const user = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
