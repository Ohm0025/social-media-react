import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProfileIcon from "../etc/profileIcon/ProfileIcon";
import { useUser } from "../../store/user";
import PostBoard from "../homepage/newUI/postBoard/PostBoard";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  aftersubmit?: () => void;
  fromEdit?: any;
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

const ModalPost = ({ isOpen, handleClose, fromEdit }: Props) => {
  const { userObj } = useUser();

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
            <div className="flex items-center gap-2 mb-2">
              <ProfileIcon
                radius="40px"
                profilePicture={userObj.profile_picture}
              />
              <div className="flex flex-col">
                <b>{userObj.firstname + " " + userObj.lastname}</b>
              </div>
            </div>
            <PostBoard
              isProfile={false}
              cbAfterPost={handleClose}
              fromEdit={fromEdit}
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalPost;
