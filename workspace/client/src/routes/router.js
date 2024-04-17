import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Theme from "../pages/theme/Theme";
import Tour from "../pages/tour/Tour";
import Loading from "../pages/loading/Loading";
import Mypage from "../pages/mypage/Mypage";
import TourSchedule from "../pages/mypage/tourSchedule/TourSchedule";
import InfoUpdate from "../pages/mypage/infoUpdate/InfoUpdate";
import Review from "../pages/review/Review";
import Write from "../pages/review/write/Write";
import Video from "../pages/review/video/Video";
import Airline from "../pages/airline/Airline";
import Search from "../pages/airline/search/Search";
import Booking from "../pages/airline/booking/Booking";
import Terms from "../pages/airline/terms/Terms";
import Payment from "../pages/airline/payment/Payment";
import Hotel from "../pages/hotel/Hotel";
import HSearch from "../pages/hotel/search/HSearch";
import List from "../pages/hotel/list/List";
import HBooking from "../pages/hotel/booking/HBooking";
import HTerms from "../pages/hotel/terms/HTerms";
import HPayment from "../pages/hotel/payment/HPayment";
import Recommend from "../pages/theme/recommend/Recommend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/tour",
        element: <Tour />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
  {
    path: "/mypage",
    element: <Mypage />,
    children: [
      {
        path: "/mypage/tourSchedule",
        element: <TourSchedule />,
      },
      {
        path: "/mypage/infoUpdate",
        element: <InfoUpdate />,
      },
    ],
  },
  {
    path: "/review",
    element: <Review />,
    children: [
      {
        path: "/review/write",
        element: <Write />,
      },
      {
        path: "/review/video",
        element: <Video />,
      },
    ],
  },
  {
    path: "/hotel",
    element: <Hotel />,
    children: [
      {
        path: "/hotel/search",
        element: <HSearch />,
      },
      {
        path: "/hotel/list",
        element: <List />,
      },
      {
        path: "/hotel/booking",
        element: <HBooking />,
      },
      {
        path: "/hotel/terms",
        element: <HTerms />,
      },
      {
        path: "/hotel/payment",
        element: <HPayment />,
      },
    ],
  },
  {
    path: "/airline",
    element: <Airline />,
    children: [
      {
        path: "/airline/search",
        element: <Search />,
      },
      {
        path: "/airline/booking",
        element: <Booking />,
      },
      {
        path: "/airline/terms",
        element: <Terms />,
      },
      {
        path: "/airline/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/theme",
    element: <Theme />,
    children: [
      {
        path: "/theme/recommend/:id",
        element: <Recommend />,
      },
    ],
  },
]);

export default router;
