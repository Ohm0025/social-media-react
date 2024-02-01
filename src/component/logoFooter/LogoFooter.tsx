type Props = {
  logoImg: string;
};

const LogoFooter = ({ logoImg }: Props) => {
  return (
    <div className="w-[30px] h-[30px] p-1 rounded-full bg-textOne">
      <img src={logoImg} alt="" />
    </div>
  );
};

export default LogoFooter;
