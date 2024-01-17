import React from "react";
import BumblebeeLogo from "./BumblebeeLogo";
import HomeUserBtn from "./HomeUserBtn";
import ProfileBtn from "./ProfileBtn";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="flex items-center bg-[#ffcb08] px-3 py-2 justify-between shadow-md">
      <BumblebeeLogo />
      <HomeUserBtn />
      <ProfileBtn />
    </div>
  );
};

export default TopBar;
