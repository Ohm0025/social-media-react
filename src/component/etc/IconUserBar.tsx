type Props = {
  iconSrc: string;
  labelName: string;
  color?: string;
  cb?: () => void;
};

const IconUserBar = (props: Props) => {
  const sx = {
    backgroundColor: `${props.color}`,
    WebkitMask: `url(${props.iconSrc}) no-repeat center`,
    mask: `url(${props.iconSrc}) no-repeat center`,
    width: "20px",
    height: "20px",
  };
  return (
    <button
      className="flex items-start gap-[20px] userbarIcon"
      onClick={props.cb}>
      <div style={sx}></div>
      <span style={{ color: `${props.color}` }}>{props.labelName}</span>
    </button>
  );
};

export default IconUserBar;
