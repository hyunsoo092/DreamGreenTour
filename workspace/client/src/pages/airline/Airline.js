import React, { useState } from "react";
import { Outlet } from "react-router-dom";


const Airline = () => {
 

  return (
    <div>
      항공 페이지
      <Outlet />
    </div>
  );
};

export default Airline;
