import { Outlet } from "react-router-dom";
import TopBar from "../component/homepage/TopBar";

const LayoutHome = () => {
  return (
    <div className="min-h-[100vh] w-full">
      <TopBar />
      <Outlet />
    </div>
  );
};

export default LayoutHome;
