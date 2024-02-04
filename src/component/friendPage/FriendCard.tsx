import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constant";
import ProfileIcon from "../etc/ProfileIcon";

const FriendCard = ({ item, btn1, btn2, cb }: any) => {
  console.log(item);
  const navigate = useNavigate();
  return (
    <div className="bg-fillOne border border-strokeOne rounded-[4px] flex flex-col w-[240px] shadow-sm overflow-hidden">
      <div className="w-full h-[150px] bg-bgCover cover center"></div>
      <div className="flex justify-between items-center px-8 translate-y-[-50%]">
        <div className="flex items-center gap-3">
          <ProfileIcon radius="60px" />
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-textOne">
              {"Jessica Alba"}
            </span>
            <small className="text-[14px] text-textTwo">Friend 10</small>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-[12px] gap-2">
        <button
          className="p-2 bg-textOne text-white w-full rounded-[4px]"
          onClick={cb}>
          {btn1}
        </button>
        {btn2 && (
          <button className="p-2 bg-textTwo text-white w-full rounded-[4px]">
            {btn2}
          </button>
        )}
      </div>
    </div>
  );
};

export default FriendCard;
