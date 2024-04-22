import React from "react";
import { Outlet } from "react-router-dom";

const Review = () => {
  return (
    <div>
      후기 페이지
      <Outlet />
    </div>
  );
};

export default Review;

