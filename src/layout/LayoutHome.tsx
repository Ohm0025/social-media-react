import { Outlet } from "react-router-dom";
import TopBar from "../component/homepage/TopBar";

type Props = {
  removeCookie: () => void;
};

const LayoutHome = ({ removeCookie }: Props) => {
  return (
    <div className="min-h-[100vh]">
      <TopBar removeCookie={removeCookie} />
      <Outlet />
    </div>
  );
};

export default LayoutHome;
