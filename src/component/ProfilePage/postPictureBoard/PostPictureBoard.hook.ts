import { useEffect, useState } from "react";
import { getPicturePost } from "../../../api/post";
import { useUser } from "../../../store/user";

const usePostPicture = (targetId: number) => {
  const [pictureArr, setPictureArr] = useState<any>([]);
  const { userObj } = useUser();

  const callPicture = async () => {
    try {
      const res = await getPicturePost(targetId || userObj.userid);
      if (res.status === 200) {
        setPictureArr(() => {
          console.log(res.data?.data);
          return [...res.data?.data.rows];
        });
      }
    } catch (err) {
      console.log(err);
      setPictureArr([]);
    }
  };

  useEffect(() => {
    callPicture();
  }, [targetId, userObj]);

  return {
    pictureArr,
  };
};

export default usePostPicture;
