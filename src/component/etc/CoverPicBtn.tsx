import { Component, ReactNode } from "react";
import ReactQuill from "react-quill";

class CoverPicBtn extends Component<{ callback: (str: string) => void }> {
  constructor(props: { callback: (str: string) => void }) {
    super(props);
  }

  modules = {
    toolbar: ["image"],
  };

  formats = ["image"];

  render(): ReactNode {
    return (
      <ReactQuill
        onChange={this.props.callback}
        className="btn-coverImage"
        theme="snow"
        modules={this.modules}
        formats={this.formats}></ReactQuill>
    );
  }
}

export default CoverPicBtn;
