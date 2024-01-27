import { Modal, Box } from "@mui/material";
import { API_URL } from "../../utils/constant";
import { useState } from "react";

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

const PictureBoard = ({ myPostArr }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState<string>("");
  return (
    <div className="rounded-md shadow-md w-full bg-white p-2">
      <h1 className="text-center mb-1">PictureBoard</h1>
      {myPostArr.map((item: any, index: number) => {
        return (
          <div key={`picture-item-${index}`}>
            {item.post_picture && (
              <div
                onClick={() => {
                  setIsOpen(true);
                  setPhoto(item.post_picture);
                }}
                className="w-[200px] h-[200px] flex justify-center items-center border p-1 rounded-md hover:pointer">
                <img
                  className="w-full"
                  src={`${
                    API_URL + "/" + item.post_picture.split("public/")[1]
                  }`}
                  alt="sample-picture"
                />
              </div>
            )}
          </div>
        );
      })}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={style}>
          <div className="flex flex-col items-center">
            {photo && (
              <img
                className="h-[200px] w-auto"
                src={`${API_URL + "/" + photo.split("public/")[1]}`}
                alt="post-img"></img>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PictureBoard;
