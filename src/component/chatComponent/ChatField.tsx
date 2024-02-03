import React from "react";
import { TargetChatObj } from "../../interface/otherComponent";
import ProfileIcon from "../etc/ProfileIcon";
import ChatBox from "./ChatBox";

type Props = {
  targetObj: TargetChatObj;
};

const ChatField = (targetObj: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-[20px] py-[10px] px-[20px] border-b-[1px] border-line">
        <div>
          <ProfileIcon radius="40px" />
        </div>
        <div className="flex items-center justify-between w-full">
          <div>{"firstname lastname"}</div>
          <div>{"sender date time"}</div>
        </div>
      </div>
      <div className="overflow-y-auto min-h-[400px] border-b-[1px] border-line">
        eg
      </div>
      <div className="p-[18px]">
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatField;
