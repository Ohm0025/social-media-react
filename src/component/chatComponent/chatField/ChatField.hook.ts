import { useEffect, useState } from "react";
import { getAllChat } from "../../../api/chat";

const useChatField = (currentchat: any) => {
  const [chatArr, setChatArr] = useState<any>([]);

  const callData = async () => {
    try {
      const res = await getAllChat(currentchat.userid);
      if (res.status === 200) {
        setChatArr([...res.data?.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callData();
  }, [currentchat]);

  return {
    chatArr,
  };
};

export default useChatField;
