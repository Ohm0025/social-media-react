import ChatContact from "../../component/chatComponent/chatContact/ChatContact";
import ChatField from "../../component/chatComponent/chatField/ChatField";
import useChatPage from "./ChatPage.hook";
import ChatWaitPage from "../../component/chatComponent/ChatWaitPage";

type Props = {};

const ChatPage = (props: Props) => {
  const { currentChat, setCurrentChat } = useChatPage();
  return (
    <div className="grid lg:grid-cols-[2fr,4fr] grid-rows-[100px,300px]">
      <div className="border-r-[1px] border-line min-h-[100vh]">
        <ChatContact selectChat={(obj: any) => setCurrentChat({ ...obj })} />
      </div>
      <div className="">
        {currentChat ? (
          <ChatField currentChat={currentChat} />
        ) : (
          <ChatWaitPage />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
