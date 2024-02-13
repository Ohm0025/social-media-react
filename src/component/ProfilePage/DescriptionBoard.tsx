import { useState } from "react";
import { useUser } from "../../store/user";
import { updateUser } from "../../api/user";
import { toast } from "react-toastify";
import { useLoading } from "../../store/loading";
import { checkEmpty } from "../../utils/checkRichText";

type Props = {
  otherDes?: string;
  isOther: boolean;
};

const DescriptionBoard = (props: Props) => {
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
      {props.isOther ? (
        props.otherDes && !checkEmpty(props.otherDes) ? (
          <div
            className="border rounded-[4px] flex justify-center items-center w-full min-h-[200px] mb-[40px]"
            dangerouslySetInnerHTML={{ __html: props.otherDes }}></div>
        ) : (
          <div className="border rounded-[4px] flex justify-center items-center w-full min-h-[200px] mb-[40px]">
            Empty
          </div>
        )
      ) : !checkEmpty(userObj.description) ? (
        <div
          className="border rounded-[4px] flex justify-center items-center w-full min-h-[200px] mb-[40px]"
          dangerouslySetInnerHTML={{ __html: userObj.description }}></div>
      ) : (
        <div className="border rounded-[4px] flex justify-center items-center w-full min-h-[200px] mb-[40px]">
          Empty
        </div>
      )}
    </div>
  );
};

export default DescriptionBoard;
