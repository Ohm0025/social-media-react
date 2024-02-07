import React from "react";
import ChatContact from "../../component/chatComponent/chatContact/ChatContact";
import ChatField from "../../component/chatComponent/chatField/ChatField";
import useChatPage from "./ChatPage.hook";
import ChatWaitPage from "../../component/chatComponent/ChatWaitPage";

type Props = {};

const ChatPage = (props: Props) => {
  const { currentChat, setCurrentChat } = useChatPage();
  return (
    <div className="grid grid-cols-[2fr,4fr]">
      <div className="border-r-[1px] border-line min-h-[100vh]">
        <ChatContact selectChat={(obj: any) => setCurrentChat({ ...obj })} />
      </div>
      <div className="">
        {currentChat ? (
          <ChatField
            currentChat={currentChat}
            targetObj={{ targetName: "user test", targetSocketId: "hgieh" }}
          />
        ) : (
          <ChatWaitPage />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
