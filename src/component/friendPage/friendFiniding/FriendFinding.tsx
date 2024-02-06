import FriendCard from "../FriendCard";
import TagSearchFriend from "./TagSearchFriend";
import useFriendFinding from "./FriendFinding.hook";
import { SuggestItem } from "../FriendSuggest";

type Props = {};

const FriendFinding = ({}: Props) => {
  const { searchName, arrFriend, setSearchName } = useFriendFinding();

  return (
    <div className="mt-[16px] mb-[24px] mx-auto min-w-[300px]">
      <TagSearchFriend
        searchName={searchName}
        setSearchName={(str: string) => setSearchName(str)}
      />
      {arrFriend.length > 0 ? (
        <div className="flex gap-4 mt-6">
          {arrFriend.map((item: any, index: number) => {
            return (
              <FriendCard
                item={item}
                btn1={"Add"}
                btn2={""}
                key={`friend-item-` + index}
                cb={() => console.log("request friend to " + item.userid)}
              />
            );
          })}
        </div>
      ) : (
        <div className="pt-7">
          <h1 className="text-[20px] text-textOne font-medium px-5">
            Finding result
          </h1>
          <div className="text-[18px] text-center text-textTwo flex flex-col items-center justify-center min-h-[300px] max-h-[500px] overflow-y-auto">
            no friend found
          </div>
        </div>
      )}

      {/* suggestion zone */}
      <div className="min-h-[300px] max-h-[500px] overflow-y-auto">
        <div className="mb-[8px] flex items-center justify-between px-[10x]">
          <h1 className="text-[16px] text-textThree font-medium">
            Suggestions
          </h1>
          <h1 className="text-[14px] text-textFive">See all</h1>
        </div>
        <div>
          <SuggestItem item={{ firstname: "kio", lastname: "opi" }} />
        </div>
      </div>
    </div>
  );
};

export default FriendFinding;
