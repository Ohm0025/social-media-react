import React from "react";
import { useCookies } from "react-cookie";

type Props = {
  isOpen: boolean;
};

const UserDropdown = (props: Props) => {
  const [cookie, setcookie, removecookie] = useCookies();
  const handleLogout = () => {
    removecookie("bumblebee-token");
  };
  return (
    props.isOpen && (
      <div className="absolute z-[2] top-2 right-0 max-w-[400px] w-[300px] translate-y-[60px]">
        <ul className="text-center">
          <li
            className="bg-gray-400 py-2 hover:cursor-pointer"
            onClick={handleLogout}>
            Log out
          </li>
        </ul>
      </div>
    )
  );
};

export default UserDropdown;
