import Footer from "../component/etc/Footer";
import BumblebeeLogo from "../component/homepage/BumblebeeLogo";
import { useForm } from "react-hook-form";
import InputText from "../component/loginPage/InputText";
import ModalRegister from "../component/registerModal/ModalRegister";
import { useState } from "react";
import { userLogin } from "../api/authenticate";
import { useCookies } from "react-cookie";
import { BBB_COOKIES } from "../utils/constant";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookies]: any = useCookies();

  const onSubmit = async (data: any) => {
    try {
      const res = await userLogin(data);
      if (res.status === 200) {
        setCookies(BBB_COOKIES, res.data?.data);
      }
    } catch (err: any) {
      toast.error(err.response.data?.message);
    }
  };

  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="flex flex-col justify-center px-7 md:mt-auto min-h-[90vh] md:items-center md:flex-row">
        <div className="flex justify-center gap-5 md:flex-col items-center md:flex-1 mb-6 md:mb-0">
          <BumblebeeLogo />
          <h1 className="font-mono text-[#ffbc12] font-extrabold text-[48px] drop-shadow-md text-center md:text-start">
            BumBleBee
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:flex-1 bg-white rounded-md overflow-hidden p-4 shadow-md">
          <div className="flex flex-col gap-6">
            <InputText
              objInput={register("EmailAddressOrPhoneNumber", {
                required: {
                  value: true,
                  message: "email or phone number is required",
                },

                pattern: {
                  value:
                    /^(?:(?:\+|00)\d{1,3})?[-.\s]?\d{7,15}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address or phone number",
                },
              })}
              errors={errors}
              type="text"
            />

            <InputText
              objInput={register("Password", {
                required: { value: true, message: "password is required" },
              })}
              errors={errors}
              type="password"
            />
          </div>
          <button
            type="submit"
            className="flex mt-6 w-full justify-center text-[24px] text-white rounded-md bg-[#ffbc12] py-2">
            Login
          </button>
          <hr className="my-2" />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex mt-2 mx-auto px-7 justify-center text-[24px] text-white rounded-md bg-[gray] py-1">
            Register
          </button>
        </form>
      </div>
      <Footer />
      <ModalRegister isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export default LoginPage;
