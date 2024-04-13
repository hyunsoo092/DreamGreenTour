import React from "react";
import { Outlet } from "react-router-dom";

const Tour = () => {
  return  (
    <div>
      여행 페이지
      <Outlet />
    </div>
   );
};

export default Tour;
