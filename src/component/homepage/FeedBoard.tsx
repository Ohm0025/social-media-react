import PostCard from "./PostCard";

type Props = {
  isProfile?: boolean;
  postArr: [];
};

const FeedBoard = ({ isProfile = false, postArr }: Props) => {
  return (
    <div
      className={`${
        isProfile ? "w-full" : "w-[80%]"
      } min-w-[300px] mx-auto my-[20px] ${isProfile ? "" : "sm:w-[50%]"}`}>
      {postArr.map((item, index) => {
        return <PostCard postItem={item} key={"postcard_" + index} />;
      })}
    </div>
  );
};

export default FeedBoard;
