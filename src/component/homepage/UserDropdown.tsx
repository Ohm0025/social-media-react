import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  removeCookie: (name: string) => void;
  changeValidUser: (value: boolean) => void;
  closeDropdown: () => void;
};

const UserDropdown = (props: Props) => {
  const navigate = useNavigate();
  const BBB_COOKIES = import.meta.env.BBB_COOKIES;
  return (
    props.isOpen && (
      <div className="absolute z-[2] sm:top-4 right-2 min-w-[150px] sm:min-w-[300px] translate-y-[60px] shadow-md rounded-md overflow-hidden">
        <ul className="text-center">
          <li
            className="py-2 bg-[#ffbc12] hover:cursor-pointer hover:filter hover:brightness-[90%]"
            onClick={() => {
              props.closeDropdown();
              navigate("/profile");
            }}>
            Profile
          </li>
          <li
            className="py-2 bg-[#ffbc12] hover:cursor-pointer hover:filter hover:brightness-[90%]"
            onClick={() => {
              props.closeDropdown();
              props.removeCookie(BBB_COOKIES);
              props.changeValidUser(false);
            }}>
            Log out
          </li>
        </ul>
      </div>
    )
  );
};

export default UserDropdown;
