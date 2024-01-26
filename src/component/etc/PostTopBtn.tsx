import { useState } from "react";
import { useMyPost } from "../../store/myPost";
import ConFirmModal from "../conFirmModal/ConFirmModal";
import { removePost } from "../../api/post";

const PostTopBtn = ({ postItem }: any) => {
  const { removeMyPostArr } = useMyPost();
  const [isOpen, setIsOpen] = useState(false);

  const clickRemove = async () => {
    try {
      const res = await removePost(postItem.postid);
      if (res.status === 200) {
        console.log("jenma");
        removeMyPostArr(postItem.postid);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex items-center gap-5">
      <button className="text-[24px]">
        <i className="fa-solid fa-ellipsis"></i>
      </button>
      <button className="text-[24px]" onClick={() => setIsOpen(true)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
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

export default PostTopBtn;
