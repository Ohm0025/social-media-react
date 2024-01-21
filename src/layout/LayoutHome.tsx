import { Outlet } from "react-router-dom";
import TopBar from "../component/homepage/TopBar";

type Props = {
  removeCookie: () => void;
  changeValidUser: (value: boolean) => void;
};

const LayoutHome = ({ removeCookie, changeValidUser }: Props) => {
  return (
    <div className="min-h-[100vh]">
      <TopBar removeCookie={removeCookie} changeValidUser={changeValidUser} />
      <Outlet />
    </div>
  );
};

export default LayoutHome;
