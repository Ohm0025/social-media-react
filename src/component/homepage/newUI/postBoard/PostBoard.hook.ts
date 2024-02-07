import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { createPost } from "../../../../api/post";
import { checkEmpty } from "../../../../utils/checkRichText";
import { useMyPost } from "../../../../store/myPost";
import { useUser } from "../../../../store/user";

const usePostBoard = () => {
  const { addMyPostArr } = useMyPost();
  const { userObj } = useUser();
  const [text, setText] = useState("");
  const [typePost, setTypePost] = useState("only_friend");
  const [error, setError] = useState("");

  const handleChangeType = (typePost: string) => {
    setTypePost(typePost);
  };

  const handleCreatePost = async () => {
    try {
      console.log(typePost);
      if (checkEmpty(text)) {
        setError("post must not be empty");
        return;
      } else {
        setError("");
        const formData = new FormData();
        formData.append("postText", text);
        formData.append("postType", typePost);
        const res = await createPost(formData);
        if (res.status === 201) {
          setText("");
          addMyPostArr({
            ...res.data.data,
            firstname: userObj.firstname,
            lastname: userObj.lastname,
            profile_picture: userObj.profile_picture,
          });
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
