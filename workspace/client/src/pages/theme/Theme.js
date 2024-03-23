import React from "react";
import { Outlet } from "react-router-dom";

const Theme = () => {
  return (
    <div>
      테마 페이지
      <Outlet />
    </div>
  );
};

export default Theme;
