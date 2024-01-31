import { useState, useEffect } from "react";
import io from "socket.io-client";
import { API_URL } from "../../utils/constant";
import { useFriendList } from "../../store/friendList";
import ProfileIcon from "../etc/ProfileIcon";
import { useUser } from "../../store/user";

type Props = {
  currentUser: "";
  recipientSocketID: "";
  isOpen: boolean;
};

const socket = io(API_URL);

const ChatBox = (props: Props) => {
  const { friendList } = useFriendList();
  const { userObj } = useUser();
  const [message, setMessage] = useState("");

  const [recipient, setRecipient] = useState("");

  const [privateMessages, setPrivateMessages] = useState<any>([]);

  useEffect(() => {
    socket.on("your socket id", ({ socketId }) => {
      console.log("socket id = " + socketId);
    });
    socket.on("private_message", (data) => {
      console.log("ehf89wrhfoiwoå");
      setPrivateMessages((prevMessages: any) => [
        ...prevMessages,
        { sender: data.sender, message: data.message },
      ]);
    });

    socket.emit("authenticate", {
      userId: userObj.userid,
      firstname: userObj.firstname,
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() && recipient) {
      socket.emit("private_message", { recipient, message });
      setPrivateMessages((prevMessages: any) => [
        ...prevMessages,
        { sender: "You", message },
      ]);
      setMessage("");
    }
  };

  return (
    <>
      {props.isOpen && (
        <div className="bg-[white] flex flex-col min-h-[100px] absolute z-[2] sm:top-4 right-2 w-[50%] sm:min-w-[300px] translate-y-[60px] shadow-md rounded-md overflow-hidden">
          <h1 className="text-center">Private Message Chat App</h1>
          <div className="flex">
            <div className="flex flex-col">
              {friendList.map((item, index) => {
                return (
                  <div
                    onClick={() => setRecipient(item.userid)}
                    className="flex justify-center items-center gap-3 bg-[gray] px-2 py-1 w-[150px]"
                    key={`recipient-item-${index}`}>
                    <ProfileIcon
                      radius={"50px"}
                      textSize={"100px"}
                      profilePicture={item.profile_picture}
                    />
                    <div>{item.firstname + " " + item.lastname}</div>
                  </div>
                );
              })}
            </div>
            <div className="bg-[#c7adad] flex w-full">
              <ul className="w-full">
                {privateMessages.map((msg: any, index: number) => (
                  <li key={index}>
                    <strong>{msg.sender}:</strong> {msg.message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#dadada] flex flex-col mt-5 p-4">
            <label className="flex w-full p-2 border">
              Message:
              <input
                className="flex w-full outline-none text-[24px]"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button className="bg-[orange] p-2" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
