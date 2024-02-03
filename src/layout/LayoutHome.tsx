import { Outlet } from "react-router-dom";
import TopBar from "../component/homepage/TopBar";
import FriendFinding from "../component/friendPage/FriendFinding";
import HomeBar from "../component/homepage/newUI/HomeBar";
import UserBar from "../component/homepage/newUI/UserBar";

const LayoutHome = () => {
  return (
    <div className="min-h-[100vh] w-full">
      <TopBar />
      <div className="min-h-[100vh] grid grid-cols-[2fr,4fr,2fr]">
        <UserBar />
        <div className="border-l-[1px] border-r-[1px] border-strokeOne">
          <Outlet />
        </div>
        <FriendFinding />
      </div>
    </div>
  );
};

export default LayoutHome;
