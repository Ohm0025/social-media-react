import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import filterIcon from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/filterIcon.svg";
import Dropdown from "react-dropdown";

type Props = {
  isProfile?: boolean;
  postArr: any[];
  isOther?: boolean;
  updateCountOne?: (postid: number, targetKey: string, value: number) => void;
};

const options = ["All", "Friends", "Private"];

const FeedBoard = ({
  isProfile = false,
  postArr,
  isOther,
  updateCountOne,
}: Props) => {
  const [filterPost, setFilterPost] = useState("All");

  const sx = {
    backgroundColor: `#7B7B7B`,
    WebkitMask: `url(${filterIcon}) no-repeat center`,
    mask: `url(${filterIcon}) no-repeat center`,
    maskSize: "1.7rem",
    width: "20px",
    height: "20px",
  };

  return (
    <div className="w-full">
      <div className="flex items-center mt-[25px] justify-between px-[24px]">
        <span className="text-[16px] text-textTwo">{filterPost}</span>
        <Dropdown
          options={options}
          onChange={(e) => {
            setFilterPost(e.value);
          }}
          arrowClosed={<div className="arrow-closed" style={sx} />}
          arrowOpen={<div className="arrow-open" style={sx} />}
        />
      </div>
      <hr className="border-t-[1px] border-line2 my-[20px] w-auto ml-[-15px] mr-[-15px]" />
      <div>
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
    </div>
  );
};

export default FeedBoard;
