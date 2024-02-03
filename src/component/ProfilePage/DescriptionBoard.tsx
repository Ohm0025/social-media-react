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
    <div className="bg-white shadow-md flex p-3">
      <div className="border rounded-[4px] flex justify-center items-center w-full min-h-[200px] mb-[40px]">
        Empthy
      </div>
    </div>
  );
};

export default DescriptionBoard;
