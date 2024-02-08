import { useEffect, useState } from "react";
import { getAllContact } from "../../../api/chat";
import { useLoading } from "../../../store/loading";
import { CurrentChatType } from "../../../interface/chat";

const useChatContact = () => {
  const [contactArr, setContactArr] = useState<CurrentChatType[]>([]);
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
