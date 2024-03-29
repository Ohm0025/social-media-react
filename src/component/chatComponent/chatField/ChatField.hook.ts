import { useEffect, useState } from "react";
import { getAllChat } from "../../../api/chat";
import { useLoading } from "../../../store/loading";
import { ChatArrType, CurrentChatType } from "../../../interface/chat";

const useChatField = (currentchat: CurrentChatType) => {
  const [chatArr, setChatArr] = useState<ChatArrType>([]);
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
      setChatArr([]);
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
