import { useState } from "react";
import ReactQuill from "react-quill";
import useChatBox from "./ChatBox.hook";

type Props = {
  currentChat: any;
  addChatArr: (newChat: any) => void;
  callData: () => void;
};

const ChatBox = ({ currentChat, addChatArr, callData }: Props) => {
  const { message, setMessage, handleSendMessage } = useChatBox(
    currentChat.userid,
    addChatArr,
    callData
  );
  let modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      ["link", "image"],
    ],
  };

  let formats = ["bold", "italic", "underline", "link", "image"];
  return (
    <div className="editor-container relative">
      <ReactQuill
        value={message}
        onChange={(value) => setMessage(value)}
        placeholder="type message"
        className="editor-toolbar chat-box"
        theme="snow"
        modules={modules}
        formats={formats}></ReactQuill>
      <div className="flex justify-end top-[-5px] right-[5px] relative">
        <button
          onClick={handleSendMessage}
          className="bg-textOne text-white text-[14px] font-medium px-[35px] py-[9px] rounded-[4px]">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
