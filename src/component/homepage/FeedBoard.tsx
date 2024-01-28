import PostCard from "./PostCard";

type Props = {
  isProfile?: boolean;
  postArr: any[];
  isOther?: boolean;
};

const FeedBoard = ({ isProfile = false, postArr, isOther }: Props) => {
  return (
    <div
      className={`${
        isProfile ? "w-full" : "w-[80%]"
      } min-w-[300px] mx-auto my-[20px] ${isOther ? "mt-0" : "mt-4"} ${
        isProfile ? "" : "sm:w-[50%]"
      }`}>
      {postArr.map((item, index) => {
        return <PostCard postItem={item} key={"postcard_" + index} />;
      })}
    </div>
  );
};

export default FeedBoard;
