import { Component } from "react";
import ReactQuill from "react-quill";

type MyProps = {};

type BtnProps = {
  typePostBtn: string;
  cb: (typePost: string) => void;
  stateCheck: string;
};

type MyState = {
  text: string;
  typePost: string;
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

class MyComponent extends Component<MyProps, MyState> {
  handleCallback = (data: string) => {
    this.setState({
      ...this.state,
      typePost: data,
    });
  };
  constructor(props: {}) {
    super(props);
    this.state = {
      text: "",
      typePost: "only_friends",
    };
    this.handleCallback = this.handleCallback.bind(this);
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
              ...this.state,
              text: value,
            })
          }
          placeholder="Compose new post"
          className="editor-toolbar post-box"
          theme="snow"
          modules={this.modules}
          formats={this.formats}></ReactQuill>
        <div className="flex justify-between items-center mt-[15px]">
          <div className="text-[14px] font-medium flex items-center gap-[10px]">
            <BtnFilterItem
              typePostBtn="public"
              cb={this.handleCallback}
              stateCheck={this.state.typePost}
            />
            <BtnFilterItem
              typePostBtn="only_friends"
              cb={this.handleCallback}
              stateCheck={this.state.typePost}
            />
            <BtnFilterItem
              typePostBtn="private"
              cb={this.handleCallback}
              stateCheck={this.state.typePost}
            />
          </div>
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
