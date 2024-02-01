import InputText from "../loginPage/InputText";
import { useRegisterForm } from "./RegisterForm.hook";

type Props = {
  handleClose: () => void;
};

const RegisterForm = ({ handleClose }: Props) => {
  const { handleSubmit, fieldRegister: register, errors } = useRegisterForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        handleClose();
      }}
      className="flex-1 min-w-[50%] bg-white z-[2] p-[8.75%] flex flex-col">
      <div className="w-[320px]">
        <div className="text-textOne font-bold text-[26px] mb-[29px]">
          Sign Up
        </div>
        <div className="flex flex-col gap-[25px] mb-[18px]">
          <InputText
            objInput={register("FirstName", {
              required: {
                value: true,
                message: "firstname is required",
              },
            })}
            errors={errors}
            type="text"
            labelName="Firstname"
          />
          <InputText
            objInput={register("LastName", {
              required: {
                value: true,
                message: "lastname is required",
              },
            })}
            errors={errors}
            type="text"
            labelName="Lastname"
          />
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
            labelName="Email address or Phone number"
          />
          <InputText
            objInput={register("Password", {
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 8,
                message: "password require at least 8 character",
              },
            })}
            errors={errors}
            type="password"
            labelName="Password"
          />
          <InputText
            objInput={register("ConfirmPassword", {
              required: {
                value: true,
                message: "confirmpassword is required",
              },
              validate: (value, { Password }) => {
                return (
                  Password === value || "confirm password must be like password"
                );
              },
            })}
            errors={errors}
            type="password"
            labelName="Confirm password"
          />

          <InputText
            objInput={register("BirthDate", {
              required: {
                value: true,
                message: "birthdate is required",
              },
            })}
            errors={errors}
            type="date"
            labelName="Birthdate"
          />
        </div>
      </div>

      <button type="submit" className="bg-[#ffcb08] py-2 rounded-md">
        Submit
      </button>
      <button type="reset" className="bg-[#d3d3d3] py-2 rounded-md">
        Clear
      </button>
    </form>
  );
};

export default RegisterForm;
