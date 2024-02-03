import React from "react";
import ChatContact from "../component/chatComponent/ChatContact";

type Props = {};

const ChatPage = (props: Props) => {
  return (
    <div className="grid grid-cols-[2fr,4fr]">
      <div className="">
        <ChatContact />
      </div>
      <div className="bg-red-500">e</div>
    </div>
  );
};

export default ChatPage;
