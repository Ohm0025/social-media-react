import { Component, ReactNode } from "react";
import ReactQuill from "react-quill";

class BioWriter extends Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  modules = {
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

  formats = [
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

  render(): ReactNode {
    return (
      <div className="bio-text rounded-[4px] border-strokeOne">
        <ReactQuill
          placeholder="Write about yourself"
          theme="snow"
          modules={this.modules}
          formats={this.formats}></ReactQuill>
      </div>
    );
  }
}

export default BioWriter;
