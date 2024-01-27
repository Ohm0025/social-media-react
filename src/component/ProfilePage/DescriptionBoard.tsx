import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useUser } from "../../store/user";

type Props = {};

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

const DescriptionBoard = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desText, setDesText] = useState("");
  const { userObj } = useUser();
  return (
    <div className="rounded-md p-2 bg-white mb-5 shadow-md">
      <h1 className="text-center mb-3">Description</h1>
      {userObj.description ? (
        <div>{userObj.description}</div>
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
              <button className="bg-[orange] rounded-md flex flex-1 justify-center py-2">
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
