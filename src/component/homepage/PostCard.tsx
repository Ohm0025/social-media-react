import { useState } from "react";
import { calDiffHr } from "../../utils/calDiffTime";
import { API_URL } from "../../utils/constant";
import ConFirmModal from "../conFirmModal/ConFirmModal";
import ProfileIcon from "../etc/ProfileIcon";
import { removePost } from "../../api/post";
import CommentBox from "../commentBox/CommentBox";

const PostCard = ({ postItem }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const clickRemove = async () => {
    try {
      const res = await removePost(postItem.postid);
      if (res.status === 201) {
        setIsOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white w-full rounded-md shadow-md py-4 mb-5">
      {/* top */}
      <div className="flex justify-between px-4">
        {/* top-start */}
        <div className="flex items-center gap-3">
          <ProfileIcon radius="40px" textSize="20px" bgColor="gray" />
          <div className="flex flex-col">
            <div>
              <b>{`${postItem.firstname + " " + postItem.lastname}`}</b>
            </div>
            <div>
              <span>{calDiffHr(postItem.post_date)}</span>
              <i className="fa-solid fa-earth-americas"></i>
            </div>
          </div>
        </div>
        {/* top-end */}
        <div className="flex items-center gap-5">
          <button className="text-[24px]">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
          <button className="text-[24px]" onClick={() => setIsOpen(true)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      {/* middle - content */}
      <div className="flex flex-col w-full">
        {postItem.post_content && (
          <div className="py-2 px-4">{`${postItem.post_content}`}</div>
        )}
        {postItem.post_picture && (
          <div className="flex justify-center items-center">
            <img
              className="w-full"
              src={`${
                postItem.post_picture &&
                API_URL + "/" + postItem.post_picture.split("public/")[1]
              }`}
              alt="sample-picture"
            />
          </div>
        )}
        <div className="px-3">
          <div className="flex justify-between my-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#ffbc12] rounded-full p-[5px] flex justify-center items-center">
                <i className="fa-solid fa-thumbs-up text-[white] text-[18px]"></i>
              </div>
              <small className="text-[gray]">3.3 K</small>
            </div>
            <div className="">
              <small className="text-[gray]">100 comments</small>
            </div>
          </div>
          <hr />
          <div className="mt-3 flex items-center justify-between">
            <button className="flex flex-1 gap-2 items-baseline justify-center hover:bg-[#f7f7f7] hover:outline outline-8 outline-[#f7f7f7] rounded-md px-2 py-1">
              <i className="fa-regular fa-thumbs-up text-[24px]"></i>
              <span>LIKE</span>
            </button>
            <button
              onClick={() => setIsComment((prev) => !prev)}
              className={`flex flex-1 gap-2 items-baseline justify-center hover:bg-[#f7f7f7] hover:outline outline-8 outline-[#f7f7f7] rounded-md px-2 py-1 ${
                isComment ? "bg-[#f7f7f7]" : ""
              }`}>
              <i className="fa-regular fa-comment text-[24px]"></i>
              <span>COMMENT</span>
            </button>
          </div>
          {isComment && <CommentBox commentArr={["kl", "kl"]} />}
        </div>
      </div>
      <ConFirmModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        questionTag="confirm delete post"
        questionDetail="Do you confirm to delete this post?"
        cb={() => clickRemove()}
      />
    </div>
  );
};

export default PostCard;
