import {
  ChatArrSocket,
  ChatObjType,
  CurrentChatType,
} from "../../../interface/chat";
import ProfileIcon from "../../etc/profileIcon/ProfileIcon";
import ChatBox from "../chatBox/ChatBox";
import { calDiffHr } from "../../../utils/calDiffTime";
import useChatField from "./ChatField.hook";
import ChatFormater from "./ChatFormater";

type Props = {
  currentChat: CurrentChatType;
};

const ChatField = ({ currentChat }: Props) => {
  const { chatArr, setChatArr, callData } = useChatField(currentChat);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-[20px] py-[10px] px-[20px] border-b-[1px] border-line">
        <div>
          <ProfileIcon
            radius="40px"
            profilePicture={currentChat.profile_picture}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div>{currentChat.firstname + " " + currentChat.lastname}</div>
          <div>
            {currentChat.dateChat ? calDiffHr(currentChat.dateChat) : ""}
          </div>
        </div>
      </div>
      <div className="min-h-[400px] border-b-[1px] border-line">
        <ChatFormater chatArr={chatArr} currentChat={currentChat} />
      </div>
      <div className="p-[18px]">
        <ChatBox
          callData={callData}
          currentChat={currentChat}
          addChatArr={(newChat: ChatArrSocket | ChatObjType) =>
            setChatArr((prev) => {
              return [...prev, newChat];
            })
          }
        />
      </div>
    </div>
  );
};

export default ChatField;
