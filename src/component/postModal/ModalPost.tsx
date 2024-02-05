import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProfileIcon from "../etc/ProfileIcon";
import { useState } from "react";
import { createPost } from "../../api/post";
import { toast } from "react-toastify";
import { useLoading } from "../../store/loading";
import { useMyPost } from "../../store/myPost";
import { useUser } from "../../store/user";
import { toFormData } from "../../utils/toFormData";
import PostBoard from "../homepage/newUI/postBoard/PostBoard";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  aftersubmit: () => void;
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

const ModalPost = ({ isOpen, handleClose, aftersubmit }: Props) => {
  const [postText, setPostText] = useState("");
  const [postType, setPostType] = useState("only_friend");
  const { openIsLoading, closeIsLoading } = useLoading();
  const { addMyPostArr } = useMyPost();
  const { userObj } = useUser();

  const handleSubmit = async () => {
    try {
      openIsLoading();
      if (postText.trim() === "") {
        toast.error("post text cannot be empty");
      }
      const formData = new FormData();
      formData.append("postText", postText);
      formData.append("postType", postType);

      const res = await createPost(formData);
      if (res.status === 201) {
        aftersubmit();
        //use after instead store
        // addMyPostArr({
        //   ...res.data?.data.rows[0],
        //   firstname: userObj.firstname,
        //   lastname: userObj.lastname,
        // });
        handleClose();
      } else {
        console.log("error create post");
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      closeIsLoading();
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
              <ProfileIcon
                radius="30px"
                textSize="20px"
                profilePicture={userObj.profile_picture}
              />
              <div className="flex flex-col">
                <b>{userObj.firstname + " " + userObj.lastname}</b>
                <select
                  value={postType}
                  onChange={(e) => setPostType(e.target.value)}>
                  <option value="only_friend">only friend</option>
                  <option value="private">private</option>
                  <option value="public">public</option>
                </select>
              </div>
            </div>
            <PostBoard />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalPost;
