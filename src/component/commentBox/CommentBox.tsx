import React, { useEffect, useRef, useState } from "react";
import ProfileIcon from "../etc/profileIcon/ProfileIcon";
import { createCommentPost, getCommentPost } from "../../api/comment";
import { toast } from "react-toastify";
import { useUser } from "../../store/user";

type Props = {
  postItem: any;
  updateCountOne: (postid: number, targetKey: string) => void;
};

const CommentBox = ({ postItem, updateCountOne }: Props) => {
  const { userObj } = useUser();

  const [commentContent, setCommentContent] = useState("");
  const [commentArr, setCommentArr] = useState<any>([]);

  const lastmessageRef = useRef<any>(null);
  const scrollToBottom = () => {
    console.log("auto scroll activate");
    lastmessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const callComment = async () => {
    try {
      const res = await getCommentPost(postItem.postid);
      if (res.status === 200) {
        setCommentArr([...res.data.data]);
      } else {
        setCommentArr([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callComment();
  }, [postItem]);

  useEffect(() => {
    scrollToBottom();
  }, [commentArr]);

  const handlePostComment = async () => {
    try {
      const formData = new FormData();
      formData.append("postText", commentContent);
      formData.append("postType", "public");
      const res = await createCommentPost(postItem.postid, formData);
      if (res.status === 201) {
        toast.success("comment success");
        setCommentContent("");
        setCommentArr((prev: any) => {
          return [
            ...prev,
            {
              post_content: commentContent,
              post_picture: "",
              profile_picture: userObj.profile_picture,
              userid: userObj.userid,
            },
          ];
        });
        updateCountOne(postItem.postid, "count_comment");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="p-2 flex flex-col rounded-md overflow-hidden max-h-[300px] overflow-y-auto gap-3 bg-[#ececec]">
        {commentArr.map((item: any, index: number) => {
          console.log(item);
          return (
            <div
              className={`flex gap-3 items-center ${
                item.userid === userObj.userid ? "flex-row-reverse" : ""
              }`}
              key={`comment-item-${index}`}>
              <div className="w-[60px]">
                <ProfileIcon
                  radius="50px"
                  textSize="40px"
                  profilePicture={item.profile_picture}
                />
              </div>
              <div className="border rounded-lg py-2 px-3 shadow-md bg-[white]">
                {item.post_content}
              </div>
            </div>
          );
        })}
        <div ref={lastmessageRef} />
      </div>
      <div className="flex flex-col mt-5">
        <input
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          type="text"
          className="outline-none rounded-md shadow p-3 border"
        />
        <div className="flex mt-4 items-center gap-6">
          <button
            className="bg-[#ffbc12] p-3 rounded-md shadow flex-[0.5]"
            onClick={handlePostComment}>
            submit
          </button>
          <button
            className="bg-[#adadad] p-3 rounded-md shadow flex-[0.5]"
            onClick={() => setCommentContent("")}>
            clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
