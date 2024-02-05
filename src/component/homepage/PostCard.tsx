import { useEffect, useState } from "react";
import { calDiffHr } from "../../utils/calDiffTime";
import { API_URL } from "../../utils/constant";
import ProfileIcon from "../etc/ProfileIcon";
import CommentBox from "../commentBox/CommentBox";
import PostTopBtn from "../etc/PostTopBtn";
import { useUser } from "../../store/user";
import { toggleLike } from "../../api/like";
import EditPostBtn from "../etc/EditPostBtn";
import LikeBtn from "../etc/LikeBtn";
import CommentBtn from "../etc/CommentBtn";

const PostCard = ({ postItem, updateCountOne }: any) => {
  const [isComment, setIsComment] = useState(false);
  const [isLike, setIsLike] = useState(postItem.thisUserLike);
  const { userObj } = useUser();

  const handleToggle = async () => {
    try {
      const res = await toggleLike(Number(postItem.postid));
      if (res.status === 201) {
        if (!isLike) {
          updateCountOne(postItem.postid, "count_like", 1);
          setIsLike(true);
        } else {
          updateCountOne(postItem.postid, "count_like", -1);
          setIsLike(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <ProfileIcon radius="60px" />
          <div>
            <div className="text-[14px] font-bold">
              {postItem.firstname + " " + postItem.lastname}
            </div>
            <div className="text-[14px]">{postItem.post_type}</div>
          </div>
        </div>
        <div className="flex items-start gap-[10px]">
          <div className="text-[14px] text-textFour">
            {calDiffHr(postItem.post_date)}
          </div>

          <EditPostBtn />
        </div>
      </div>

      <div className="w-full mt-[16px] mb-[18px]">
        <div
          className="border p-5"
          dangerouslySetInnerHTML={{ __html: postItem.post_content }}></div>
      </div>

      <div className="px-[30px] flex items-center gap-[50px]">
        <LikeBtn />
        <CommentBtn />
      </div>
      <div className="mt-[20px] text-[14px] text-textFive ml-[25px]">
        {"122 likes this"}
      </div>

      <hr className="border-t-[1px] border-line2 my-[20px] w-auto ml-[-15px] mr-[-15px]" />
    </div>
  );
};

export default PostCard;
