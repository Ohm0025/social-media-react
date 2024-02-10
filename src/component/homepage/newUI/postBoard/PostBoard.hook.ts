import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { createPost, editPost } from "../../../../api/post";
import { checkEmpty } from "../../../../utils/checkRichText";
import { useMyPost } from "../../../../store/myPost";
import { useUser } from "../../../../store/user";
import useFeedBoard from "../feedBoard/FeedBoard.hook";

const usePostBoard = (isProfile: boolean, fromEdit: any) => {
  const [text, setText] = useState(fromEdit?.post_content || "");
  const [typePost, setTypePost] = useState(
    fromEdit?.post_type || "only_friend"
  );
  const [error, setError] = useState("");

  const { callPostData } = useFeedBoard(isProfile);

  const handleChangeType = (typePost: string) => {
    setTypePost(typePost);
  };

  const handleCreatePost = async () => {
    try {
      if (checkEmpty(text)) {
        setError("post must not be empty");
        return;
      } else {
        setError("");
        const formData = new FormData();
        formData.append("postText", text);
        formData.append("postType", typePost);
        const res = fromEdit?.postid
          ? await editPost(fromEdit?.postid, formData)
          : await createPost(formData);
        if (res.status === 201) {
          setText("");
          callPostData();
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (err: AxiosError | any) {
      toast.error(err.message);
      console.log(err);
    }
  };

  let modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  let formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return {
    text,
    setText,
    typePost,
    setTypePost,
    modules,
    formats,
    handleChangeType,
    handleCreatePost,
    error,
    setError,
  };
};

export default usePostBoard;
