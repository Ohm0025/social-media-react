import ProfileIcon from "../../etc/profileIcon/ProfileIcon";

type Props2 = {
  item: any;
};

const SuggestItem = (props: Props2) => {
  return (
    <div className="flex items-center h-[120px] border border-strokeOne rounded-[4px] relative">
      <div className="flex flex-col px-[20px] justify-center items-center gap-[5px]">
        <ProfileIcon
          otherUserId={props.item.userid}
          radius="60px"
          profilePicture={props.item.profile_picture}
        />
        <div className="flex items-center gap-[5px] text-[14px] font-bold">
          <span>{props.item.firstname}</span>
          <span>{props.item.lastname}</span>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: props.item.profile_cover }}
        className="absolute top-0 left-0 h-full w-full overflow-hidden flex justify-center items-center z-[-1]"></div>
    </div>
  );
};

const FriendSuggest = () => {
  return <div>FriendSuggest</div>;
};

export { FriendSuggest, SuggestItem };
