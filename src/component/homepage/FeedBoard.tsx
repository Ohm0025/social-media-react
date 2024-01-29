import PostCard from "./PostCard";

type Props = {
  isProfile?: boolean;
  postArr: any[];
  isOther?: boolean;
  updateCountOne: (postid: number, targetKey: string, value: number) => void;
};

const FeedBoard = ({
  isProfile = false,
  postArr,
  isOther,
  updateCountOne,
}: Props) => {
  return (
    <div
      className={`${
        isProfile ? "w-full" : "w-[80%]"
      } min-w-[300px] mx-auto my-[20px] ${isOther ? "mt-0" : "mt-4"} ${
        isProfile ? "" : "sm:w-[50%]"
      }`}>
      {postArr.map((item, index) => {
        return (
          <PostCard
            postItem={item}
            updateCountOne={updateCountOne}
            key={"postcard_" + index}
          />
        );
      })}
    </div>
  );
};

export default FeedBoard;
