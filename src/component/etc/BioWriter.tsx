import ReactQuill from "react-quill";

type Props = {
  des: string;
  cb: (str: string) => void;
};

const BioWriter = ({ des, cb }: Props) => {
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
  return (
    <div className="bio-text rounded-[4px] border-strokeOne">
      <ReactQuill
        value={des}
        onChange={cb}
        placeholder="Write about yourself"
        theme="snow"
        modules={modules}
        formats={formats}></ReactQuill>
    </div>
  );
};

export default BioWriter;
