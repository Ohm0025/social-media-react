import titleWeb from "../../assets/svg/titleWeb.svg";

const LoginLeftSide = () => {
  return (
    <div className="bg-bgLogin flex-1 bg-no-repeat bg-cover bg-center min-w-[50%] flex flex-col items-center pt-[5%]">
      <div className="">
        <img src={titleWeb} alt="title-web" />
      </div>
      <div className="text-white font-medium text-center mt-[-50px] flex flex-col items-center">
        <span className="text-[32px]">Creators + Fans = Chello</span>
        <span className="text-[18px]">#LetsGO</span>
      </div>
    </div>
  );
};

export default LoginLeftSide;
