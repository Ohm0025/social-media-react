import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { userRegister } from "../../api/authenticate";
import { RegisterObj } from "../../interface/authen";
import { AxiosError } from "axios";

const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterObj>();

  const onSubmitRegister: SubmitHandler<RegisterObj> = async (data) => {
    try {
      const res = await userRegister(data);

      if (res.status === 201) {
        toast.success(res.data?.message);
      }
    } catch (err: AxiosError | any) {
      console.log(err.response?.data?.message);
      toast.error(
        (err.response?.data && err.response.data?.message) || err.message
      );
    }
  };

  return {
    fieldRegister: register,
    handleSubmit: handleSubmit(onSubmitRegister),
    errors,
  };
};

export { useRegisterForm };
