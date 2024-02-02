import { Component } from "react";
import ReactQuill from "react-quill";

type MyProps = {};

type MyState = {
  text: string;
};

class MyComponent extends Component<MyProps, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      text: "",
    };
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

  render() {
    return (
      <div className="editor-container">
        <ReactQuill
          value={this.state.text}
          onChange={(value) =>
            this.setState({
              text: value,
            })
          }
          placeholder="Compose new post"
          className="editor-toolbar"
          theme="snow"
          modules={this.modules}
          formats={this.formats}></ReactQuill>
        <div className="flex justify-end mt-[15px]">
          <button
            onClick={() => console.log(this.state.text)}
            className="bg-textOne text-white text-[14px] font-medium px-[35px] py-[9px] rounded-[4px]">
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
