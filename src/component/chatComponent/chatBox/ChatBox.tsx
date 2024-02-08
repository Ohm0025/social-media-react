import ReactQuill from "react-quill";
import useChatBox from "./ChatBox.hook";
import { CurrentChatType, NewChatItem } from "../../../interface/chat";

type Props = {
  currentChat: CurrentChatType;
  addChatArr: (newChat: NewChatItem) => void;
  callData: () => void;
};

let modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    ["link", "image"],
  ],
};

let formats = ["bold", "italic", "underline", "link", "image"];

const ChatBox = ({ currentChat, addChatArr, callData }: Props) => {
  const { message, setMessage, handleSendMessage } = useChatBox(
    currentChat.userid,
    addChatArr,
    callData
  );

  return (
    <div className="editor-container relative">
      <ReactQuill
        value={message}
        onChange={(value: string) => setMessage(value)}
        placeholder="type message"
        className="editor-toolbar chat-box"
        theme="snow"
        modules={modules}
        formats={formats}></ReactQuill>
      <div className="flex justify-end top-[-5px] left-[5px] w-fit ml-auto">
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
