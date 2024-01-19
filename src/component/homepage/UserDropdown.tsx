import { BBB_COOKIES } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  removeCookie: (name: string) => void;
};

const UserDropdown = (props: Props) => {
  return (
    props.isOpen && (
      <div className="absolute z-[2] top-2 right-0 max-w-[400px] w-[300px] translate-y-[60px]">
        <ul className="text-center">
          <li
            className="bg-gray-400 py-2 hover:cursor-pointer"
            onClick={() => props.removeCookie(BBB_COOKIES)}>
            Log out
          </li>
        </ul>
      </div>
    )
  );
};

export default UserDropdown;
