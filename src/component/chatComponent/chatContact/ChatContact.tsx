import { CurrentChatType } from "../../../interface/chat";
import { calDiffHr } from "../../../utils/calDiffTime";
import ProfileIcon from "../../etc/profileIcon/ProfileIcon";
import useChatContact from "./ChatContact.hook";
import ChatIcon from "./ChatIcon";

type Props = {
  selectChat: (obj: CurrentChatType) => void;
};

const ChatContact = (props: Props) => {
  const { contactArr } = useChatContact();

  return (
    <div>
      <div className="flex justify-between items-center px-[15px] max-sm:mt-[10px] lg:my-[25px]">
        <span className="text-[20px] text-textOne font-bold">Messages</span>
        <ChatIcon />
      </div>

      <div className="flex lg:flex-col overflow-y-auto">
        {contactArr.length > 0 &&
          contactArr.map((item: CurrentChatType, index: number) => {
            return (
              <div
                onClick={() => props.selectChat({ ...item })}
                className="flex items-start lg:gap-[15px] lg:py-[15px] px-[15px] lg:border-b-[1px] border-line hover:cursor-pointer"
                key={`chatcontact-item-${index}`}>
                <div>
                  <ProfileIcon
                    radius="40px"
                    profilePicture={item.profile_picture}
                  />
                </div>
                <div className="text-[14px] lg:flex flex-col gap-[5px] w-full hidden">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">
                      {item.firstname + " " + item.lastname}
                    </div>
                    <div>{item.dateChat ? calDiffHr(item.dateChat) : ""}</div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.lastChat }}></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChatContact;
