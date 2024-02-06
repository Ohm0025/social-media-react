import { useEffect, useState } from "react";
import { getOtherUser, updateUser } from "../../../api/user";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useLoading } from "../../../store/loading";
import { useUser } from "../../../store/user";

const useProfileCover = (
  callData: () => void,
  isOther: boolean,
  otherUserId: number
) => {
  const { userObj } = useUser();
  const { openIsLoading, closeIsLoading } = useLoading();
  const [isEdit, setIsEdit] = useState(false);
  const [cover, setCover] = useState("");
  const [picture, setPicture] = useState("");
  const [des, setDes] = useState(userObj.description);

  const [otherObj, setOtherObj] = useState<any>(null);

  const handleUpdateUser = async () => {
    try {
      openIsLoading();
      const formData = new FormData();
      formData.append("profile_cover", cover);
      formData.append("profile_picture", picture);
      formData.append("description", des);
      const res = await updateUser(formData);
      if (res.status === 201) {
        // updateObj({
        //   profile_cover: cover,
        //   profile_picture: picture,
        //   description: des,
        // });
        setTimeout(() => {
          setCover("");
          setPicture("");
        }, 2000);
        toast.success("update success");
      } else {
        toast.error(res.data);
      }
    } catch (err: AxiosError | any) {
      console.log(err);
      console.log(err.message);
    } finally {
      setIsEdit(false);
      callData();
      setTimeout(() => {
        closeIsLoading();
      }, 2000);
    }
  };

  const callOtherUser = async () => {
    try {
      openIsLoading();
      const res = await getOtherUser(otherUserId);
      if (res.status === 200) {
        setOtherObj({ ...res.data?.data });
      }
    } catch (err) {
      console.log(err);
    } finally {
      closeIsLoading();
    }
  };

  useEffect(() => {
    if (isOther) {
      callOtherUser();
    }
  }, [otherUserId]);

  useEffect(() => {
    console.log("update user profile");
  }, [otherObj]);

  return {
    isEdit,
    setIsEdit,
    cover,
    setCover,
    picture,
    setPicture,
    des,
    setDes,
    handleUpdateUser,
    otherObj,
  };
};

export default useProfileCover;
