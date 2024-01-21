import { useState, useEffect } from "react";
import io from "socket.io-client";
import { API_URL } from "../../utils/constant";

type Props = {
  currentUser: "";
  recipientSocketID: "";
};

const socket = io(API_URL);

const ChatBox = (props: Props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any>([]);
  const [socketId, setSocketId] = useState("");

  useEffect(() => {
    socket.on("your socket id", ({ socketId }) => {
      setSocketId(socketId);
    });

    socket.on("private message", (msg) => {
      setMessages((prevMessages: any) => [...prevMessages, msg]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("private message", {
      sender: socketId,
      recipient: props.recipientSocketID,
      message,
    });
    setMessages((prevMessages: any) => [
      ...prevMessages,
      { sender: socket.id, message },
    ]);
    setMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((msg: any, index: any) => (
          <div key={index}>
            {msg.sender === socketId ? "You: " : "Other user: "}
            {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
