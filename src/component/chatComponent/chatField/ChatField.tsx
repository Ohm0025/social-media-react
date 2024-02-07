import { TargetChatObj } from "../../../interface/otherComponent";
import ProfileIcon from "../../etc/profileIcon/ProfileIcon";
import ChatBox from "../chatBox/ChatBox";
import { calDiffHr } from "../../../utils/calDiffTime";
import useChatField from "./ChatField.hook";
import ChatFormater from "./ChatFormater";

type Props = {
  targetObj: TargetChatObj;
  currentChat: any;
};

const ChatField = ({ targetObj, currentChat }: Props) => {
  const { chatArr } = useChatField(currentChat);

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
          <div>{calDiffHr(currentChat.dateChat)}</div>
        </div>
      </div>
      <div className="overflow-y-auto min-h-[400px] border-b-[1px] border-line">
        <ChatFormater chatArr={chatArr} currentChat={currentChat} />
      </div>
      <div className="p-[18px]">
        <ChatBox currentChat={currentChat} />
      </div>
    </div>
  );
};

export default ChatField;
