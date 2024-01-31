import InputText from "./InputText";
import { FormLoginObj } from "../../interface/authen";

const FormLogin = ({
  handleSubmit,
  register,
  errors,
  setIsOpenregister,
}: FormLoginObj) => {
  return (
    <form
      onSubmit={handleSubmit}
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
        onClick={() => setIsOpenregister(true)}
        className="flex mt-2 mx-auto px-7 justify-center text-[24px] text-white rounded-md bg-[gray] py-1">
        Register
      </button>
    </form>
  );
};

export default FormLogin;
