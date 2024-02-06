import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProfileIcon from "../etc/profileIcon/ProfileIcon";
import { useState, useRef } from "react";
import { createPost } from "../../api/post";
import { useLoading } from "../../store/loading";
import { useMyPost } from "../../store/myPost";
import { useUser } from "../../store/user";
import { updateUser } from "../../api/user";

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

const ModalPostPic = ({ isOpen, handleClose, aftersubmit }: Props) => {
  const { addMyPostArr } = useMyPost();
  const { userObj } = useUser();
  const { openIsLoading, closeIsLoading } = useLoading();
  const [postText, setPostText] = useState<string>("");
  const [postType, setPostType] = useState<string>("only_friend");
  const [image, setImage] = useState<any>(null);

  const fileEl = useRef<any>();
  const handleSubmit = async () => {
    try {
      openIsLoading();

      if (!image) {
        return console.log("photo is required");
      }
      const formData = new FormData();
      formData.append("postText", postText);
      formData.append("postType", postType);
      formData.append("post_picture", image);

      const res = await createPost(formData);
      if (res.status === 201) {
        aftersubmit();
        // addMyPostArr({
        //   ...res.data?.data.rows[0],
        //   firstname: userObj.firstname,
        //   lastname: userObj.lastname,
        // });
        handleClose();
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
            {image ? (
              <img
                className="flex my-3"
                src={URL.createObjectURL(image)}
                alt="post-img"></img>
            ) : (
              <button
                type="button"
                onClick={() => fileEl.current.click()}
                className="text-center py-3 px-3 border my-3">
                <p className="text-[#c5c5c5] my-6">
                  click to post picture here
                </p>
                <input
                  type="file"
                  ref={fileEl}
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
              </button>
            )}
            <div className="flex p-3 mb-3 border">
              <textarea
                className={"outline-none flex flex-1 flex-wrap"}
                placeholder="caption for picture"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
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

export default ModalPostPic;
