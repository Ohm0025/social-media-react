import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { removePost } from "../../api/post";
import ModalPost from "../postModal/ModalPost";

type Props = {
  postItem: any;
  callNewData: () => void;
};

const EditPostBtn = ({ postItem, callNewData }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleRemovePost = async () => {
    try {
      const res = await removePost(postItem.postid);
      if (res.status === 200) {
        toast.success("delete post success");
        callNewData();
      }
    } catch (err: AxiosError | any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex justify-center items-center"
        onClick={() => {
          setIsEdit((prev) => !prev);
        }}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.25 10.25C5.58152 10.25 5.89946 10.1183 6.13388 9.88388C6.3683 9.64946 6.5 9.33152 6.5 9C6.5 8.66848 6.3683 8.35054 6.13388 8.11612C5.89946 7.8817 5.58152 7.75 5.25 7.75C4.91848 7.75 4.60054 7.8817 4.36612 8.11612C4.1317 8.35054 4 8.66848 4 9C4 9.33152 4.1317 9.64946 4.36612 9.88388C4.60054 10.1183 4.91848 10.25 5.25 10.25ZM9 10.25C9.33152 10.25 9.64946 10.1183 9.88388 9.88388C10.1183 9.64946 10.25 9.33152 10.25 9C10.25 8.66848 10.1183 8.35054 9.88388 8.11612C9.64946 7.8817 9.33152 7.75 9 7.75C8.66848 7.75 8.35054 7.8817 8.11612 8.11612C7.8817 8.35054 7.75 8.66848 7.75 9C7.75 9.33152 7.8817 9.64946 8.11612 9.88388C8.35054 10.1183 8.66848 10.25 9 10.25ZM14 9C14 9.33152 13.8683 9.64946 13.6339 9.88388C13.3995 10.1183 13.0815 10.25 12.75 10.25C12.4185 10.25 12.1005 10.1183 11.8661 9.88388C11.6317 9.64946 11.5 9.33152 11.5 9C11.5 8.66848 11.6317 8.35054 11.8661 8.11612C12.1005 7.8817 12.4185 7.75 12.75 7.75C13.0815 7.75 13.3995 7.8817 13.6339 8.11612C13.8683 8.35054 14 8.66848 14 9ZM17.75 9C17.75 13.8325 13.8325 17.75 9 17.75C4.1675 17.75 0.25 13.8325 0.25 9C0.25 4.1675 4.1675 0.25 9 0.25C13.8325 0.25 17.75 4.1675 17.75 9ZM16.5 9C16.5 4.85813 13.1419 1.5 9 1.5C4.85813 1.5 1.5 4.85813 1.5 9C1.5 13.1419 4.85813 16.5 9 16.5C13.1419 16.5 16.5 13.1419 16.5 9Z"
            fill="#B0B0B0"
          />
        </svg>
      </button>
      {isEdit && (
        <ul className="absolute top-[110%] right-[12%] bg-fillOne w-[100px]">
          <li
            onClick={() => setOpenEditModal(true)}
            className="py-1 flex justify-center items-center hover:brightness-[80%] hover:cursor-pointer bg-fillOne">
            Edit
          </li>
          <li
            onClick={() => handleRemovePost()}
            className="py-1 flex justify-center items-center hover:brightness-[80%] hover:cursor-pointer bg-fillOne">
            Delete
          </li>
          <li
            onClick={() => setIsEdit(false)}
            className="py-1 flex justify-center items-center hover:brightness-[80%] hover:cursor-pointer bg-fillOne">
            Close
          </li>
        </ul>
      )}
      <ModalPost
        isOpen={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        fromEdit={postItem}></ModalPost>
    </div>
  );
};

export default EditPostBtn;
