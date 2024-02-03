import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../component/homepage/TopBar";
import FriendFinding from "../component/friendPage/FriendFinding";
import HomeBar from "../component/homepage/newUI/HomeBar";
import UserBar from "../component/homepage/newUI/UserBar";
import { useEffect, useState } from "react";
import { getPathName } from "../utils/getUrl";
import Footer from "../component/etc/Footer";

const LayoutHome = () => {
  const param = useLocation();
  const [currentPage, setCurrentPage] = useState(getPathName(param.pathname));

  useEffect(() => {
    setCurrentPage(getPathName(param.pathname));
  }, [param]);
  return (
    <div className="min-h-[100vh] w-full">
      <TopBar />
      <div
        className={`min-h-[100vh] grid ${
          currentPage !== "demochat"
            ? "grid-cols-[2fr,4fr,2fr]"
            : "grid-cols-[2fr,6fr]"
        }`}>
        <UserBar />
        <div className="border-l-[1px] border-r-[1px] border-strokeOne">
          <Outlet />
        </div>
        <div
          className={`px-[15px] ${
            currentPage === "demochat" ? "hidden" : "block"
          }`}>
          <FriendFinding />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutHome;
