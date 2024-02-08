import ReactQuill from "react-quill";

type Props = {
  callback: (str: string) => void;
};

function CoverPicBtn({ callback }: Props) {
  let modules = {
    toolbar: ["image"],
  };

  let formats = ["image"];
  return (
    <ReactQuill
      onChange={(value) => callback(value)}
      className="btn-coverImage"
      theme="snow"
      modules={modules}
      formats={formats}></ReactQuill>
  );
}

export default CoverPicBtn;
