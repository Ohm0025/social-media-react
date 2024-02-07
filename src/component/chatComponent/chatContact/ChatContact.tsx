import { calDiffHr } from "../../../utils/calDiffTime";
import ProfileIcon from "../../etc/profileIcon/ProfileIcon";
import useChatContact from "./ChatContact.hook";
import ChatIcon from "./ChatIcon";

type Props = {
  selectChat: (obj: any) => void;
};

const ChatContact = (props: Props) => {
  const { contactArr } = useChatContact();

  return (
    <div>
      <div className="flex justify-between items-center px-[15px] my-[25px]">
        <span className="text-[20px] text-textOne font-bold">Messages</span>
        <ChatIcon />
      </div>

      <div className="flex flex-col overflow-y-auto">
        {contactArr.length > 0 &&
          contactArr.map((item: any, index: number) => {
            return (
              <div
                onClick={() => props.selectChat({ ...item })}
                className="flex items-start gap-[15px] py-[15px] px-[15px] border-b-[1px] border-line hover:cursor-pointer"
                key={`chatcontact-item-${index}`}>
                <div>
                  <ProfileIcon
                    radius="40px"
                    profilePicture={item.profile_picture}
                  />
                </div>
                <div className="text-[14px] flex flex-col gap-[5px] w-full">
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
