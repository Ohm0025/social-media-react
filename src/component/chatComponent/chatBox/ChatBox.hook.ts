import io from "socket.io-client";
import { API_URL } from "../../../utils/constant";
import { useEffect, useState } from "react";
import { useUser } from "../../../store/user";

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

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("chat", message, userObj.userid, targetId);
      setMessage("");
    }
  };

  return {
    handleSendMessage,
    setMessage,
    message,
  };
};

export default useChatBox;
