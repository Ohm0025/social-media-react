import React from "react";
import ProfileIcon from "../etc/ProfileIcon";

type Props = {
  commentArr: any[];
};

const CommentBox = (props: Props) => {
  return (
    <div className="flex flex-col mt-6">
      <div className="p-2 flex flex-col rounded-md overflow-hidden gap-3 bg-[#ececec]">
        {props.commentArr.map((item: any, index) => {
          return (
            <div
              className="flex gap-3 items-center"
              key={`comment-item-${index}`}>
              <div className="w-[60px]">
                <ProfileIcon
                  radius="50px"
                  textSize="40px"
                  profilePicture={item.profile_picture}
                />
              </div>
              <div className="border rounded-lg py-2 px-3 shadow-md bg-[white]">
                {item.comment_content || "sample text jgpegjpejgpk[gaejo"}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mt-5">
        <input
          type="text"
          className="outline-none rounded-md shadow p-3 border"
        />
        <div className="flex mt-4 items-center gap-6">
          <button className="bg-[#ffbc12] p-3 rounded-md shadow flex-[0.5]">
            submit
          </button>
          <button className="bg-[#adadad] p-3 rounded-md shadow flex-[0.5]">
            clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
