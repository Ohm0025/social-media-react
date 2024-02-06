import ProfileIcon from "../etc/ProfileIcon";

type Props2 = {
  item: any;
};

const SuggestItem = (props: Props2) => {
  return (
    <div className="flex items-center h-[120px] border border-strokeOne rounded-[4px]">
      <div className="flex flex-col px-[20px] justify-center items-center gap-[5px]">
        <ProfileIcon
          radius="60px"
          profilePicture={props.item.profile_picture}
        />
        <div className="flex items-center gap-[5px] text-[14px] font-bold">
          <span>{props.item.firstname}</span>
          <span>{props.item.lastname}</span>
        </div>
      </div>
    </div>
  );
};

const FriendSuggest = () => {
  return <div>FriendSuggest</div>;
};

export { FriendSuggest, SuggestItem };
