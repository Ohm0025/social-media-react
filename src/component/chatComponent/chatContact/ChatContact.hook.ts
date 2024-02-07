import { useEffect, useState } from "react";
import { getAllContact } from "../../../api/chat";
import { useLoading } from "../../../store/loading";

const useChatContact = () => {
  const [contactArr, setContactArr] = useState<any>([]);
  const { openIsLoading, closeIsLoading } = useLoading();

  const callListFriend = async () => {
    try {
      openIsLoading();
      const res = await getAllContact();
      if (res.data?.data.length > 0) {
        setContactArr([...res.data?.data]);
      }
    } catch (err) {
      setContactArr([]);
    } finally {
      closeIsLoading();
    }
  };

  useEffect(() => {
    callListFriend();
  }, []);

  return {
    contactArr,
    callListFriend,
  };
};

export default useChatContact;
