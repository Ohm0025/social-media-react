import { useEffect, useRef, useState } from "react";

type Props = {
  isProfile?: boolean;
  openModal?: () => void;
};

const PostBoard = ({ isProfile = false, openModal = () => {} }: Props) => {
  const fileEl = useRef<any>();
  const [postObj, setPostObj] = useState({});

  useEffect(() => {
    console.log(postObj);
  }, [postObj]);
  return (
    <div
      className={`bg-[white] text-center rounded-md ${
        isProfile ? "" : "mt-[30px]"
      } py-3 ${
        isProfile ? "" : "w-[80%]"
      } min-w-[300px] shadow-md mx-auto px-3 ${isProfile ? "" : "sm:w-[50%]"} ${
        isProfile ? "w-full" : ""
      }`}>
      <div className="flex justify-center gap-4 items-center">
        <div className="w-[45px] h-[45px] bg-[#d5d5d5] flex justify-center items-center rounded-full">
          {false ? <img src="" alt="" /> : <i className="fa-solid fa-user"></i>}
        </div>

        <button
          type="button"
          onClick={() => openModal()}
          className="flex flex-grow rounded-3xl px-4 py-2 bg-[#f7f7f7]">
          <span>What 's in your mind ?</span>
        </button>
      </div>
      <hr className="my-4" />
      <div>
        <button
          onClick={() => fileEl.current.click()}
          className="flex mx-auto items-center gap-3 hover:bg-[#f7f7f7] py-2 px-3 rounded-md">
          <i className="fa-solid fa-image text-[green] text-[22px]"></i>
          <span>photo</span>
        </button>
        <input
          type="file"
          className="hidden"
          ref={fileEl}
          onChange={(e) => {
            if (e.target.files && e.target.files.length) {
              setPostObj({ ...e.target.files });
            }
          }}
        />
      </div>
    </div>
  );
};

export default PostBoard;
