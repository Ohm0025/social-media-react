import PostCard from "./PostCard";

type Props = {
  isProfile?: boolean;
};

const FeedBoard = ({ isProfile = false }: Props) => {
  return (
    <div
      className={`${
        isProfile ? "w-full" : "w-[80%]"
      } min-w-[300px] mx-auto my-[20px] ${isProfile ? "" : "sm:w-[50%]"}`}>
      <PostCard />
    </div>
  );
};

export default FeedBoard;
