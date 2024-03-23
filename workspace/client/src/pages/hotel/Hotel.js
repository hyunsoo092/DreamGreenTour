import React from "react";
import { Outlet } from "react-router-dom";

const Hotel = () => {
  return (
    <div>
      숙박 페이지
      <Outlet />
    </div>
  );
};

export default Hotel;
