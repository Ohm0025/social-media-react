import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "../../api/authenticate";
import { useCookies } from "react-cookie";
import { LoginObj } from "../../interface/authen";
import { BBB_COOKIES } from "../../../garbage/constant";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginObj>();

  const navigate = useNavigate();
  const [, setCookies] = useCookies();

  const [isOpenRegister, setIsOpenregister] = useState<boolean>(false);

  const onSubmitLogin: SubmitHandler<LoginObj> = async (data) => {
    try {
      const res = await userLogin(data);
      if (res.status === 200) {
        setCookies(BBB_COOKIES, res.data?.data);
        toast.success(res.data?.message);
        navigate("/");
      }
    } catch (err: AxiosError | any) {
      console.log(err);
      toast.error(
        (err.response?.data && err.response.data?.message) || err.message
      );
    }
  };

  return {
    isOpenRegister,
    setIsOpenregister: (bool: boolean) => setIsOpenregister(bool),
    fieldLogin: register,
    handleSubmit: handleSubmit(onSubmitLogin),
    errors,
  };
};

export { useLoginPage };
