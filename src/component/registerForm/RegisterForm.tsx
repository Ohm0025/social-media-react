import InputText from "../loginPage/InputText";
import { useRegisterForm } from "./RegisterForm.hook";
import iconGoogle from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/googleIcon.svg";
import { GoogleLogin } from "@react-oauth/google";

type Props = {
  handleClose: () => void;
};

const RegisterForm = ({ handleClose }: Props) => {
  const {
    handleSubmit,
    fieldRegister: register,
    errors,
  } = useRegisterForm(handleClose);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        console.log(errors);
        // if (!errors) {
        //   handleSubmit();
        //   handleClose();
        // }
      }}
      className="flex-1 min-w-[50%] bg-white z-[2] px-[8.75%] py-[5%] flex flex-col">
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
      <div className="mt-[23px] w-[320px]">
        <button
          type="submit"
          className="bg-primary text-white py-2 px-3 rounded-[18px] text-[16px]">
          Sign up
        </button>
        <div className="text-[14px] mt-[23px]">
          By signing up you agree to our{" "}
          <span className="text-textOne underline">Terms of Service</span> and
          <span className="text-textOne underline">Privacy Policy</span> and
          confirm that you are at least 18 years old.
        </div>
        <div className="text-[14px] mt-[23px]">
          Already have an account?{" "}
          <button
            className="font-semibold text-textOne hover:underline"
            onClick={() => handleClose()}>
            Log In
          </button>
        </div>
      </div>
      <hr className="border border-line mt-[35px]" />
      <div className="mt-[18px] text-textTwo text-[14px]">Or</div>
      <div className="mt-[15px]">
        <span className="text-textThree text-[16px] font-medium">
          Login with
        </span>
        <div className="rounded-[4px] mt-[20px] w-[203px] h-[40px] flex justify-center items-center">
          <GoogleLogin onSuccess={(value) => console.log(value)}></GoogleLogin>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
