import logoWeb from "../../assets/svg/titleWeb.svg";

const TopBar = () => {
  return (
    <div className="flex items-center bg-primary justify-center shadow-md sticky top-0 min-w-[300px] h-[89px] z-[2]">
      <img src={logoWeb} alt="logo-web-img" className="w-[177px]" />
    </div>
  );
};

export default TopBar;
