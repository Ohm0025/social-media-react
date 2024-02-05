import ReactQuill from "react-quill";
import usePostBoard from "./PostBoard.hook";

type BtnProps = {
  typePostBtn: string;
  cb: (typePost: string) => void;
  stateCheck: string;
};

const BtnFilterItem = ({ typePostBtn, cb, stateCheck }: BtnProps) => {
  return (
    <button
      onClick={() => cb(typePostBtn)}
      className={`${
        typePostBtn === stateCheck ? "bg-textOne" : "bg-textFour"
      } text-white rounded-[60px] py-1 px-3`}>
      {typePostBtn}
    </button>
  );
};

const PostBoard = () => {
  const {
    text,
    setText,
    typePost,
    setTypePost,
    modules,
    formats,
    handleChangeType,
    handleCreatePost,
    error,
  } = usePostBoard();

  return (
    <div className="editor-container">
      <ReactQuill
        value={text}
        onChange={(str: string) => setText(str)}
        placeholder="Compose new post"
        className="editor-toolbar post-box"
        theme="snow"
        modules={modules}
        formats={formats}></ReactQuill>
      {error && (
        <div className="text-red-500 absolute left-[50%] translate-x-[-50%]">
          {error}
        </div>
      )}
      <div className="flex justify-between items-center mt-[15px]">
        <div className="text-[14px] font-medium flex items-center gap-[10px]">
          <BtnFilterItem
            typePostBtn="public"
            cb={handleChangeType}
            stateCheck={typePost}
          />
          <BtnFilterItem
            typePostBtn="only_friend"
            cb={handleChangeType}
            stateCheck={typePost}
          />
          <BtnFilterItem
            typePostBtn="private"
            cb={handleChangeType}
            stateCheck={typePost}
          />
        </div>
        <button
          onClick={() => handleCreatePost()}
          className="bg-textOne text-white text-[14px] font-medium px-[35px] py-[9px] rounded-[4px]">
          Post
        </button>
      </div>
    </div>
  );
};

export default PostBoard;
