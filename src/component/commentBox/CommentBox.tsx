import { useEffect, useRef, useState } from "react";
import ProfileIcon from "../etc/profileIcon/ProfileIcon";
import { createCommentPost, getCommentPost } from "../../api/comment";
import { toast } from "react-toastify";
import { useUser } from "../../store/user";

type Props = {
  postItem: any;
};

const CommentBox = ({ postItem }: Props) => {
  console.log(postItem);

  const { userObj } = useUser();

  const [commentContent, setCommentContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [commentArr, setCommentArr] = useState<any>([]);

  const lastmessageRef = useRef<any>(null);

  const scrollToBottom = () => {
    lastmessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const callComment = async () => {
    try {
      setErrorMessage("");
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
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [commentArr]);

  const handlePostComment = async () => {
    try {
      if (commentContent.trim() === "") {
        setErrorMessage("commemt content is required.");
        return;
      } else {
        const formData = new FormData();
        formData.append("postText", commentContent);
        formData.append("postType", "public");
        const res = await createCommentPost(postItem.postid, formData);
        if (res.status === 201) {
          toast.success("comment success");
          setCommentContent("");
          callComment();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="p-2 flex flex-col items-center rounded-[4px] overflow-hidden min-h-[100px] max-h-[300px] overflow-y-auto gap-3">
        {commentArr.length === 0 ? (
          <h1 className="text-textTwo text-[16px] font-semibold">no comment</h1>
        ) : (
          commentArr.map((item: any, index: number) => {
            return (
              <div
                className={`flex gap-3 items-center ${
                  item.userid === userObj.userid
                    ? "flex-row-reverse self-end"
                    : "self-start"
                }`}
                key={`comment-item-${index}`}>
                <div className="w-[60px]">
                  <ProfileIcon
                    radius="50px"
                    textSize="40px"
                    profilePicture={item.profile_picture}
                  />
                </div>
                <div className="border rounded-[4px] py-2 px-3 shadow-sm bg-[white]">
                  {item.post_content}
                </div>
              </div>
            );
          })
        )}
        <div ref={lastmessageRef} />
      </div>
      <div className="flex flex-col mt-5">
        {errorMessage && <small className="text-[red]">{errorMessage}</small>}
        <input
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          type="text"
          className={`outline-none rounded-[4px] shadow-sm p-3 border ${
            errorMessage ? "border-[red]" : ""
          }`}
        />
        <div className="flex mt-4 items-center gap-6">
          <button
            className="bg-textOne p-3 rounded-md shadow flex-[0.5] text-[14px] font-semibold text-white"
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
