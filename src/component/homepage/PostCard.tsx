import { calDiffHr } from "../../utils/calDiffTime";
import ProfileIcon from "../etc/profileIcon/ProfileIcon";
import { toggleLike } from "../../api/like";
import EditPostBtn from "../etc/EditPostBtn";
import LikeBtn from "../etc/LikeBtn";
import CommentBtn from "../etc/CommentBtn";
import { useUser } from "../../store/user";
import { useState } from "react";
import CommentBox from "../commentBox/CommentBox";

const PostCard = ({ postItem, callPostData }: any) => {
  const { userObj } = useUser();

  const [isComment, setIsComment] = useState(false);

  const handleToggle = async () => {
    try {
      const res = await toggleLike(Number(postItem.postid));
      if (res.status === 201) {
        callPostData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <ProfileIcon
            radius="60px"
            profilePicture={postItem.profile_picture}
            otherUserId={postItem.userid}
          />
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

          {postItem.userid === userObj.userid && (
            <EditPostBtn postItem={postItem} callNewData={callPostData} />
          )}
        </div>
      </div>

      <div className="w-full mt-[16px] mb-[18px]">
        <div
          className="border p-5"
          dangerouslySetInnerHTML={{ __html: postItem.post_content }}></div>
      </div>

      <div className="px-[30px] flex items-center gap-[50px]">
        <LikeBtn
          thisUserLike={postItem.thisUserLike}
          handleToggle={handleToggle}
        />
        <div className="flex items-center gap-[10px]">
          <CommentBtn
            isComment={isComment}
            setIsComment={() => {
              isComment && callPostData();
              setIsComment((prev) => !prev);
            }}
          />
          {!isComment && (
            <span className="text-[14px] text-[#A8A8A8]">
              {postItem.count_comment || 0}
            </span>
          )}
        </div>
      </div>
      {isComment ? (
        <CommentBox postItem={postItem} />
      ) : (
        <div className="mt-[20px] text-[14px] text-textFive ml-[25px]">
          {(postItem.count_like || 0) + " likes this"}
        </div>
      )}

      <hr className="border-t-[1px] border-line2 my-[20px] w-auto ml-[-15px] mr-[-15px]" />
    </div>
  );
};

export default PostCard;
