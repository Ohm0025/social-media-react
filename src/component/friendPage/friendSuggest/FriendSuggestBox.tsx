import { useState } from "react";
import { SuggestItem } from "./FriendSuggest";
import useFriendSuggest from "./FriendSuggest.hook";

type Props = {};

const FriendSuggestBox = (props: Props) => {
  const { suggestArr } = useFriendSuggest();
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className={`min-h-[300px] ${
        seeMore ? "max-h-[600px]" : "max-h-[300px]"
      } overflow-y-auto mt-[17px]`}>
      <div className="mb-[8px] flex items-center justify-between px-[10x]">
        <h1 className="text-[16px] text-textThree font-medium">Suggestions</h1>
        {seeMore ? (
          <h1
            className="text-[14px] text-textFive hover:cursor-pointer hover:underline"
            onClick={() => setSeeMore(false)}>
            See less
          </h1>
        ) : (
          <h1
            className="text-[14px] text-textFive hover:cursor-pointer hover:underline"
            onClick={() => setSeeMore(true)}>
            See all
          </h1>
        )}
      </div>
      <div className="flex flex-col w-full gap-[10px]">
        {suggestArr.map((item: any, index: number) => {
          return <SuggestItem item={item} key={`sugest-item-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default FriendSuggestBox;
