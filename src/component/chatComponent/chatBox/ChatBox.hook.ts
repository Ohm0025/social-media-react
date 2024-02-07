import io from "socket.io-client";
import { API_URL } from "../../../utils/constant";
import { useEffect, useState } from "react";
import { useUser } from "../../../store/user";
import { createChat } from "../../../api/chat";

const useChatBox = (targetId: number) => {
  const socket = io(API_URL);
  const { userObj } = useUser();
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      const userid = userObj.userid;
      socket.emit("registChatUser", userid);
    });
    socket.on("chat", (data) => {
      alert(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleCreateChat = async () => {
    try {
      const chatObj = new FormData();
      chatObj.append("chatcontent", message);
      const res = await createChat(targetId, chatObj);
      if (res.status === 201) {
        setMessage("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("chat", message, userObj.userid, targetId);
      handleCreateChat();
    }
  };

  return {
    handleSendMessage,
    setMessage,
    message,
  };
};

export default useChatBox;
