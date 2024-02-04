import { Component, ReactNode } from "react";
import ReactQuill from "react-quill";

class CoverPicBtn extends Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  modules = {
    toolbar: ["image"],
  };

  formats = ["image"];

  render(): ReactNode {
    return (
      <ReactQuill
        className="btn-coverImage"
        theme="snow"
        modules={this.modules}
        formats={this.formats}></ReactQuill>
    );
  }
}

export default CoverPicBtn;
