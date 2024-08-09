import { Box, Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { API_URL } from "../../../garbage/constant";
import { updateUser } from "../../api/user";
import { useLoading } from "../../store/loading";
import { useUser } from "../../store/user";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  oldPicture?: any;
  oldCover?: any;
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

const ModalUpdatePicture = ({
  isOpen,
  handleClose,
  oldPicture = "",
  oldCover = "",
}: Props) => {
  const [image, setImage] = useState<any>(null);
  const [cover, setCover] = useState<any>(null);
  const fileEl1 = useRef<any>();
  const fileEl2 = useRef<any>();

  const [error, setIsError] = useState({
    errImage: "",
    errCover: "",
  });

  const { userObj, updateObj } = useUser();
  const { openIsLoading, closeIsLoading } = useLoading();

  const handleSaveChange = async () => {
    try {
      openIsLoading();
      if (!cover && !image) {
        setIsError((prev) => {
          return {
            ...prev,
            errImage: "Image has not changed",
            errCover: "Cover has not changed",
          };
        });
      }
      const formData = new FormData();
      formData.append("profile_picture", image);
      formData.append("profile_cover", cover);

      const res = await updateUser(formData);
      if (res.status === 201) {
        setIsError((prev) => {
          return { ...prev, errImage: "" };
        });
        updateObj({
          profile_picture: res.data?.data?.profile_picture,
          profile_cover: res.data?.data?.profile_cover,
        });
        console.log(res.data);
        handleClose();
      } else {
        setIsError((prev) => {
          return { ...prev, errImage: res.data.message };
        });
      }
    } catch (err) {
      console.log(err);
      console.log(error);
    } finally {
      closeIsLoading();
    }
  };

  const handleClearChange = () => {
    setImage(null);
    setCover(null);
    setIsError((prev) => {
      return { errImage: "", errCover: "" };
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              {image ? (
                <img
                  className="h-[200px] w-auto"
                  src={URL.createObjectURL(image)}
                  alt="post-img"></img>
              ) : (
                <img
                  className="h-[200px] w-auto"
                  src={`${
                    oldPicture
                      ? API_URL + "/" + oldPicture.split("public/")[1]
                      : API_URL + "/images/default_profile_pic.jpeg"
                  }`}
                  alt="sample-picture"
                />
              )}
              {error.errImage && (
                <small className="text-[red]">{error.errImage}</small>
              )}
            </div>
            <button
              type="button"
              onClick={() => fileEl1.current.click()}
              className="text-center py-3 px-3 border my-3 rounded-md shadow bg-[#ffbc12]">
              change profile picture
              <input
                type="file"
                ref={fileEl1}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              {cover ? (
                <img
                  className="h-[200px] w-auto"
                  src={URL.createObjectURL(cover)}
                  alt="post-img"></img>
              ) : (
                <img
                  className="h-[200px] w-auto"
                  src={`${
                    oldCover
                      ? API_URL + "/" + oldCover.split("public/")[1]
                      : API_URL + "/images/bg-pic01.jpeg"
                  }`}
                  alt="sample-picture"
                />
              )}
              {error.errCover && (
                <small className="text-[red]">{error.errCover}</small>
              )}
            </div>
            <button
              type="button"
              onClick={() => fileEl2.current.click()}
              className="text-center py-3 px-3 border my-3 rounded-md shadow bg-[#ffbc12]">
              change profile cover
              <input
                type="file"
                ref={fileEl2}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    setCover(e.target.files[0]);
                  }
                }}
              />
            </button>
          </div>
          <div className="flex justify-center gap-4 border py-5 px-3 mt-3">
            <button
              onClick={handleSaveChange}
              className="bg-[#255625] text-[white] py-1 px-2 rounded-md text-[20px] flex-1">
              save change
            </button>
            <button
              onClick={handleClearChange}
              className="bg-[#fa6969] text-[white] py-1 px-2 rounded-md text-[20px] flex-1">
              discard change
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalUpdatePicture;
