type Props = {
  switch: boolean;
  cb1: () => void;
  cb2: () => void;
  cb3: () => void;
};

const SaveOrCancel = (props: Props) => {
  return (
    <div>
      {props.switch ? (
        <div className="flex items-center gap-[6px]">
          <button
            className="rounded-[60px] bg-fillOne px-[16px] py-[10px] border border-strokeOne text-[16px] text-textOne flex items-center gap-[15px]"
            onClick={props.cb1}>
            Cancel edit
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-[6px]">
          <button
            className="rounded-[60px] bg-fillOne px-[16px] py-[10px] border border-strokeOne text-[16px] text-textOne flex items-center gap-[15px]"
            onClick={props.cb2}>
            Save
          </button>
          <button
            className="rounded-[60px] bg-fillOne px-[16px] py-[10px] border border-strokeOne text-[16px] text-textOne flex items-center gap-[15px]"
            onClick={props.cb1}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default SaveOrCancel;
