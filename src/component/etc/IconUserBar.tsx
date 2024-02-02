type Props = {
  iconSrc: string;
  labelName: string;
  color?: string;
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
    <button className="flex items-start gap-[20px] userbarIcon">
      <div style={sx}></div>
      <span>{props.labelName}</span>
    </button>
  );
};

export default IconUserBar;
