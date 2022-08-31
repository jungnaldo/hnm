import React from "react";
import ProductDtail from "../page/ProductDtail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authentication }) => {
  return authentication == true ? <ProductDtail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
