import BumblebeeLogo from "../component/homepage/BumblebeeLogo";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="flex flex-col justify-center px-7 md:mt-auto min-h-[90vh] md:items-center md:flex-row">
        <div className="flex justify-center gap-5 md:flex-col items-center md:flex-1 mb-6 md:mb-0">
          <BumblebeeLogo />
          <h1 className="font-mono text-[#ffbc12] font-extrabold text-[48px] drop-shadow-md text-center md:text-start">
            BumBleBee
          </h1>
        </div>
        <div className="md:flex-1 bg-white rounded-md overflow-hidden p-4 shadow-md">
          <div className="flex flex-col gap-2">
            <input
              className="border border-[#f7f7f7f] rounded-md p-2 text-[22px]"
              type="text"
              placeholder="email or phone number"
            />
            <input
              className="border border-[#f7f7f7f] rounded-md p-2 text-[22px]"
              type="password"
              placeholder="password"
            />
          </div>
          <button className="flex mt-2 w-full justify-center text-[24px] text-white rounded-md bg-[#ffbc12] py-2">
            Login
          </button>
          <hr className="my-2" />
          <button className="flex mt-2 mx-auto px-7 justify-center text-[24px] text-white rounded-md bg-[gray] py-1">
            Register
          </button>
        </div>
      </div>
      <div className="bg-white h-[150px] text-gray-400 shadow mt-auto">
        <span>submvpebno</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione
          repudiandae, ducimus consequuntur nulla iste labore fugiat assumenda
          molestias odio hic aspernatur nam praesentium, beatae quo
          necessitatibus doloribus laudantium nobis.
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
