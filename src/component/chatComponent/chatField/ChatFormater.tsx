import { useEffect, useRef } from "react";
import { useUser } from "../../../store/user";
import ProfileIcon from "../../etc/profileIcon/ProfileIcon";

type Props = {
  chatArr: any;
  currentChat: any;
};

const ChatFormater = (props: Props) => {
  const { userObj } = useUser();
  const endRef = useRef<any>(null);
  const parentRef = useRef<any>(null);

  const scrollToBottom = () => {
    if (parentRef.current) {
      let position = endRef.current?.getBoundingClientRect();
      parentRef.current.scrollTo({
        left: position.left,
        bottom: position.bottom,
        behavior: "smooth",
      });

      console.log("run auto scroll");
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.chatArr]);

  return (
    <div
      className="flex flex-col p-[15px] w-full gap-[7px] max-h-[600px] overflow-y-auto"
      ref={parentRef}>
      {props.chatArr?.map((item: any, index: number) => {
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
      <div ref={endRef}></div>
    </div>
  );
};

export default ChatFormater;
