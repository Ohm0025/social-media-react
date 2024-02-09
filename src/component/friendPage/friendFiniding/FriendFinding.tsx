import TagSearchFriend from "./TagSearchFriend";
import useFriendFinding from "./FriendFinding.hook";
import { SuggestItem } from "../friendSuggest/FriendSuggest";
import FriendSuggestBox from "../friendSuggest/FriendSuggestBox";

type Props = {};

const FriendFinding = ({}: Props) => {
  const { searchName, arrFriend, setSearchName } = useFriendFinding();

  return (
    <div className="mt-[16px] mb-[24px] mx-auto min-w-[300px]">
      <TagSearchFriend
        searchName={searchName}
        setSearchName={(str: string) => setSearchName(str)}
      />
      <div className="pt-7">
        <h1 className="text-[20px] text-textOne font-medium px-5">
          Finding result
        </h1>
      </div>
      <div className="min-h-[200px] max-h-[500px] overflow-y-auto">
        {arrFriend.length > 0 ? (
          <div className="flex flex-col gap-4 mt-6">
            {arrFriend.map((item: any, index: number) => {
              return <SuggestItem item={item} key={`friend-item-` + index} />;
            })}
          </div>
        ) : (
          <div className="text-[18px] text-center text-textTwo pt-[25px]">
            no friend found
          </div>
        )}
      </div>

      {/* suggestion zone */}
      <FriendSuggestBox />
    </div>
  );
};

export default FriendFinding;
