import { useParams } from "react-router-dom";
import { useUser } from "../../store/user";
import { useEffect, useState } from "react";
import { useLoading } from "../../store/loading";
import { getOtherUser } from "../../api/user";

const useProfilePageHook = () => {
  const { searchUserId } = useParams();
  const { userObj } = useUser();
  const { openIsLoading, closeIsLoading } = useLoading();

  const [isOther, setIsOther] = useState<boolean>(false);
  const [otherObj, setOtherObj] = useState<any>(null);

  const callOtherUser = async () => {
    try {
      openIsLoading();
      const res = await getOtherUser(Number(searchUserId));
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
    if (searchUserId) {
      if (Number(searchUserId) !== userObj.userid) {
        setIsOther(true);
        return;
      } else {
        setIsOther(false);
        return;
      }
    } else {
      setIsOther(false);
      return;
    }
  }, [searchUserId]);

  useEffect(() => {
    if (isOther) {
      callOtherUser();
    }
  }, [searchUserId]);

  return { isOther, otherUserId: Number(searchUserId), otherObj };
};

export default useProfilePageHook;
