import React from "react";
import ProfileIcon from "../etc/ProfileIcon";

type Props = {};

const ChatContact = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center px-[15px] my-[25px]">
        <span className="text-[20px] text-textOne font-bold">Messages</span>
        <div>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
              stroke="#A8A8A8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col overflow-y-auto">
        {["user1", "user2"].map((item, index) => {
          return (
            <div
              className="flex items-start gap-[15px] py-[15px] px-[15px] border-b-[1px] border-line"
              key={`chatcontact-item-${index}`}>
              <div>
                <ProfileIcon radius="40px" />
              </div>
              <div className="text-[14px] flex flex-col gap-[5px] w-full">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{item}</div>
                  <div>{"March 2040"}</div>
                </div>
                <div>{"simple text kagpojepgjreglajgoja;..."}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatContact;