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
      ["bold", "italic", "underline"],
      ["link", "image"],
    ],
  };

  formats = ["bold", "italic", "underline", "link", "image"];

  render() {
    return (
      <div className="editor-container relative">
        <ReactQuill
          value={this.state.text}
          onChange={(value) =>
            this.setState({
              text: value,
            })
          }
          placeholder="type message"
          className="editor-toolbar chat-box"
          theme="snow"
          modules={this.modules}
          formats={this.formats}></ReactQuill>
        <div className="flex justify-end top-[-5px] right-[5px] relative">
          <button
            onClick={() => console.log(this.state.text)}
            className="bg-textOne text-white text-[14px] font-medium px-[35px] py-[9px] rounded-[4px]">
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
