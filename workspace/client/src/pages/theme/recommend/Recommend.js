import React from "react";
import { Outlet, useParams } from "react-router-dom";
import GlobalStyle from "../../../global/global";
import Layout from "../../layout/Layout";

const Recommend = () => {
  const { id } = useParams()
  return <div>
         <GlobalStyle/>
            <Layout />
  

    숙소 및 식당 추천페이지
    </div>;

};

export default Recommend;
