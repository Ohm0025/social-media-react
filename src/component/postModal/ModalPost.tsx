import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProfileIcon from "../etc/ProfileIcon";
import { useState } from "react";
import { createPostText } from "../../api/post";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  border: "0px",
  borderRadius: "10px",
  boxShadow: 24,
  backgroundColor: "white",
  p: 4,
};

const ModalPost = ({ isOpen, handleClose }: Props) => {
  const [postText, setPostText] = useState("");
  const [postType, setPostType] = useState("only_friend");
  const handleSubmit = async () => {
    try {
      if (postText.trim() === "") {
        console.log("post not be empty");
      } else {
        const res = await createPostText(postText, postType);
        if (res.status === 201) {
          console.log(res.data?.message);
          console.log(res.data);
        } else {
          console.log("error create post");
          console.log(res.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const clearText = () => {
    setPostText("");
  };
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-[22px]">Create Post</h1>
            <button
              type="button"
              onClick={handleClose}
              className="bg-[#d7d7d7] rounded-full w-[30px] h-[30px]">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col">
            <div className="flex items-center">
              <ProfileIcon radius="30px" textSize="20px" />
              <div className="flex flex-col">
                <b>firstname lastname</b>
                <select
                  value={postType}
                  onChange={(e) => setPostType(e.target.value)}>
                  <option value="only_friend">only friend</option>
                  <option value="private">private</option>
                  <option value="public">public</option>
                </select>
              </div>
            </div>
            <div className="text-center py-3 px-3 border my-3">
              <textarea
                name=""
                id=""
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's on your mind?"
                rows={5}
                className="w-full outline-none text-[25px]"></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#ffcb08] py-2 text-[18px] rounded-md">
                Post
              </button>
              <button
                type="button"
                onClick={clearText}
                className="bg-[#dadada] py-2 text-[18px] rounded-md">
                Clear
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalPost;
