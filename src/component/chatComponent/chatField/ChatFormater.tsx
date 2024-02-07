import React from "react";
import { useUser } from "../../../store/user";
import ProfileIcon from "../../etc/profileIcon/ProfileIcon";

type Props = {
  chatArr: any;
  currentChat: any;
};

const ChatFormater = (props: Props) => {
  const { userObj } = useUser();
  return (
    <div className="flex flex-col p-[15px]">
      {props.chatArr?.map((item: any, index: number) => {
        if (userObj.userid === item.senderid) {
          return (
            <div
              className="flex items-center px-[15px] gap-[7px]"
              key={`chatItem-${index}`}>
              <ProfileIcon
                radius="40px"
                profilePicture={props.currentChat.profile_picture}
              />
              <div className="border border-strokeOne px-[15px] py-[6px] rounded-[30px]">
                {item.chatcontent}
              </div>
            </div>
          );
        }
        return;
      })}
    </div>
  );
};

export default ChatFormater;
