import { useEffect, useRef } from "react";
import { useUser } from "../../../store/user";
import ProfileIcon from "../../etc/profileIcon/ProfileIcon";
import {
  ChatArrSocket,
  ChatArrType,
  ChatObjType,
  CurrentChatType,
} from "../../../interface/chat";

type Props = {
  chatArr: ChatArrType;
  currentChat: CurrentChatType;
};

const ChatFormater = (props: Props) => {
  const { userObj } = useUser();
  const lastmessageRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    lastmessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.chatArr]);

  return (
    <div className="flex flex-col p-[15px] w-full gap-[7px] max-h-[600px] overflow-y-auto">
      {props.chatArr?.map((item, index) => {
        if (userObj.userid !== item.senderid) {
          return (
            <div
              className="flex items-center px-[15px] gap-[7px]"
              key={`chatItem-${index}`}>
              <ProfileIcon
                radius="40px"
                profilePicture={props.currentChat.profile_picture}
              />
              <div
                dangerouslySetInnerHTML={{ __html: item.chatcontent }}
                className="border border-strokeOne px-[15px] py-[6px] rounded-[30px]"></div>
            </div>
          );
        } else {
          return (
            <div
              className="flex flex-row-reverse items-center justify-end px-[15px] gap-[7px] ml-auto"
              key={`chatItem-${index}`}>
              <ProfileIcon
                radius="40px"
                profilePicture={userObj.profile_picture}
              />
              <div
                dangerouslySetInnerHTML={{ __html: item.chatcontent }}
                className="border border-strokeOne px-[15px] py-[6px] rounded-[30px]"></div>
            </div>
          );
        }
      })}
      <div ref={lastmessageRef} />
    </div>
  );
};

export default ChatFormater;
