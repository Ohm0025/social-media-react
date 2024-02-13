import useFriendSuggest from "../friendPage/friendSuggest/FriendSuggest.hook";

type Props = {
  callback: () => void;
  otherId?: number | undefined;
};

const AddFriendBtn = ({ callback, otherId }: Props) => {
  const { handleRequestFriend } = useFriendSuggest();
  return (
    <button
      onClick={() => {
        otherId && handleRequestFriend(otherId);
      }}
      className="rounded-[60px] bg-fillOne px-[16px] py-[10px] border border-strokeOne text-[16px] text-textOne flex items-center gap-[15px]">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="rgba(21,10,161,1)">
          <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
        </svg>
      </div>
      <div>Add Friend</div>
    </button>
  );
};

export default AddFriendBtn;
