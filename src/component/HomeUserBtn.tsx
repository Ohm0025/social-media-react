import React from "react";

type Props = {};

const HomeUserBtn = (props: Props) => {
  return (
    <div className="flex gap-6">
      <button className="text-[26px]">
        <i className="fa-solid fa-home"></i>
      </button>
      <button className="text-[26px]">
        <i className="fa-solid fa-user-group"></i>
      </button>
    </div>
  );
};

export default HomeUserBtn;
