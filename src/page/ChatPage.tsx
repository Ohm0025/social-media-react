import React from "react";
import ChatContact from "../component/chatComponent/ChatContact";
import ChatField from "../component/chatComponent/ChatField";

type Props = {};

const ChatPage = (props: Props) => {
  return (
    <div className="grid grid-cols-[2fr,4fr]">
      <div className="border-r-[1px] border-line min-h-[100vh]">
        <ChatContact />
      </div>
      <div className="">
        <ChatField
          targetObj={{ targetName: "user test", targetSocketId: "hgieh" }}
        />
      </div>
    </div>
  );
};

export default ChatPage;
