import ProfileIcon from "../../etc/profileIcon/ProfileIcon";
import { useNavigate } from "react-router-dom";
import useFriendSuggest from "./FriendSuggest.hook";
import FriendCard from "../FriendCard";

type Props2 = {
  item: any;
};

const SuggestItem = (props: Props2) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center h-[120px] border border-strokeOne rounded-[4px] relative hover:cursor-pointer"
      onClick={() => {
        let encodeUserId = encodeURIComponent(Number(props.item.userid));
        navigate("/final-project/profile/" + encodeUserId);
      }}>
      <div className="flex flex-col px-[20px] justify-center items-center gap-[5px]">
        <ProfileIcon
          otherUserId={props.item.userid}
          radius="60px"
          profilePicture={props.item.profile_picture}
        />
        <div className="flex items-center gap-[5px] text-[14px] font-bold">
          <span>{props.item.firstname}</span>
          {/* <span>{props.item.lastname}</span> */}
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: props.item.profile_cover }}
        className="absolute top-0 left-0 h-full w-full overflow-hidden flex justify-center items-center z-[-1]"></div>
    </div>
  );
};

const FriendSuggest = () => {
  const { suggestArr, handleRequestFriend } = useFriendSuggest();
  return (
    <div className="flex flex-col items-center min-w-[300px] mt-6">
      {suggestArr.length > 0 ? (
        <div className="flex p-5 flex-wrap gap-3 justify-center">
          {suggestArr.map((item: any, index: number) => {
            return (
              <FriendCard
                item={item}
                btn1={"Add"}
                btn2={""}
                cb={() => handleRequestFriend(item.userid)}
                key={`list-friend-${index}`}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
          <h1 className="text-[20px] font-semibold text-textTwo">
            you have no friend
          </h1>
        </div>
      )}
    </div>
  );
};

export { FriendSuggest, SuggestItem };
