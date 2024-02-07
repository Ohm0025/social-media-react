import { useState } from "react";

const useChatPage = () => {
  const [currentChat, setCurrentChat] = useState<any>(null);
  return {
    currentChat,
    setCurrentChat,
  };
};

export default useChatPage;
