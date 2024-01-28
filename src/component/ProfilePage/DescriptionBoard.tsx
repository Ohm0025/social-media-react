import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useUser } from "../../store/user";
import { updateUser } from "../../api/user";
import { toast } from "react-toastify";
import { useLoading } from "../../store/loading";

type Props = {
  otherDes?: string;
  isOther: boolean;
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

const DescriptionBoard = ({ otherDes, isOther }: Props) => {
  const { userObj, updateObj } = useUser();
  const { openIsLoading, closeIsLoading } = useLoading();

  const [isOpen, setIsOpen] = useState(false);
  const [desText, setDesText] = useState(userObj.description || "");

  const handleSubmit = async () => {
    try {
      openIsLoading();
      if (desText.trim() === "" || !desText) {
        toast.error("description can not be empty");
        return;
      }
      const formData = new FormData();
      formData.append("description", desText);
      const res = await updateUser(formData);
      if (res.status === 201) {
        toast.success("add description success");
        updateObj({ description: desText });
        setIsOpen(false);
      } else {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    } finally {
      closeIsLoading();
    }
  };

  return (
    <div className="rounded-md p-2 bg-white mb-5 shadow-md">
      <h1 className="text-center mb-3">Description</h1>
      {isOther ? (
        <div className="w-full h-[150px] flex border rounded-md p-3">
          {otherDes}
        </div>
      ) : userObj.description ? (
        <div
          className="w-full h-[150px] flex border rounded-md p-3 hover:cursor-pointer"
          onClick={() => setIsOpen(true)}>
          {userObj.description}
        </div>
      ) : (
        <div className="w-full h-[150px] flex justify-center items-center border rounded-md">
          <button
            className="px-3 py-1 rounded-md bg-[orange]"
            onClick={() => setIsOpen(true)}>
            Add Description
          </button>
        </div>
      )}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={style}>
          <div className="flex flex-col">
            <textarea
              className="flex p-2 h-[150px]"
              value={desText}
              onChange={(e) => setDesText(e.target.value)}
              placeholder="เพิ่มรายละเอียดเกี่ยวกับตัวคุณ"></textarea>
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={handleSubmit}
                className="bg-[orange] rounded-md flex flex-1 justify-center py-2">
                submit
              </button>
              <button className="bg-[orange] rounded-md flex flex-1 justify-center py-2">
                clear
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DescriptionBoard;
