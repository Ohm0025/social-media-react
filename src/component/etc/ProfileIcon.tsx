import React from "react";

type Props = {
  radius: string;
  textSize: string;
  bgColor?: string;
};

const ProfileIcon = ({ radius, textSize, bgColor = "#f7f7f7" }: Props) => {
  return (
    <button
      className={`rounded-full w-[${radius}] h-[${radius}] overflow-hidden text-[${textSize}] bg-[${bgColor}] text-center`}>
      {false ? <img src="" alt="" /> : <i className="fa-solid fa-user"></i>}
    </button>
  );
};

export default ProfileIcon;
