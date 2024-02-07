import { useEffect, useState } from "react";
import { getAllChat } from "../../../api/chat";
import { useLoading } from "../../../store/loading";

const useChatField = (currentchat: any) => {
  const [chatArr, setChatArr] = useState<any>([]);
  const { openIsLoading, closeIsLoading } = useLoading();

  const callData = async () => {
    try {
      openIsLoading;
      const res = await getAllChat(currentchat.userid);
      if (res.status === 200) {
        setChatArr([...res.data?.data]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      closeIsLoading();
    }
  };

  useEffect(() => {
    callData();
  }, [currentchat]);

  return {
    chatArr,
    setChatArr,
    callData,
  };
};

export default useChatField;
