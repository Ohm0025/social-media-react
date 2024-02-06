import { SuggestItem } from "./FriendSuggest";
import useFriendSuggest from "./FriendSuggest.hook";

type Props = {};

const FriendSuggestBox = (props: Props) => {
  const { suggestArr } = useFriendSuggest();
  return (
    <div className="min-h-[300px] max-h-[500px] overflow-y-auto mt-[17px]">
      <div className="mb-[8px] flex items-center justify-between px-[10x]">
        <h1 className="text-[16px] text-textThree font-medium">Suggestions</h1>
        <h1 className="text-[14px] text-textFive">See all</h1>
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
