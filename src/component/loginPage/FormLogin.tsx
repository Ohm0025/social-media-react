import InputText from "./InputText";
import { FormLoginObj } from "../../interface/authen";
import iconGoogle from "/Users/apple/Desktop/westride/final project/final-project-react/src/assets/svg/googleIcon.svg";

const FormLogin = ({
  handleSubmit,
  register,
  errors,
  setIsOpenregister,
}: FormLoginObj) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 min-w-[50%] bg-white z-[2] p-[8.75%] flex flex-col">
      <div className="w-[320px]">
        <div className="text-textOne font-bold text-[26px] mb-[29px]">
          Log In
        </div>
        <div className="flex flex-col gap-[25px] mb-[18px]">
          <InputText
            labelName="Email address or Phone number"
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
            labelName="Password"
            objInput={register("Password", {
              required: { value: true, message: "password is required" },
            })}
            errors={errors}
            type="password"
          />
        </div>
        <div className="flex items-start justify-between mb-[33px]">
          <button
            type="submit"
            className="w-[89px] h-[48px] text-[16px] text-white rounded-[18px] bg-primary py-1">
            Login
          </button>
          <span className="text-textTwo text-[14px] underline">
            Forget Password?
          </span>
        </div>
        <div>
          <span className="text-[14px]">{"Don’t have an account? "}</span>{" "}
          <span
            className="text-[14px] font-semibold text-textOne hover:cursor-pointer hover:underline"
            onClick={() => setIsOpenregister(true)}>
            {"Sign Up"}
          </span>
        </div>
        <hr className="border border-line mt-[35px]" />
        <div className="mt-[18px] text-textTwo text-[14px]">Or</div>
        <div className="mt-[15px]">
          <span className="text-textThree text-[16px] font-medium">
            Log In with
          </span>
          <div className="rounded-[4px] mt-[20px] w-[203px] h-[40px] border border-strokeOne bg-fillOne flex items-center gap-[15px] px-[11px] py-[10px]">
            <div>
              <img src={iconGoogle} alt="icon-google" />
            </div>
            <div className="text-[14px] text-textTwo">Log In with Google</div>
          </div>
        </div>
      </div>
      <div className="text-[18px] text-textOne flex flex-col items-start mt-[auto]">
        <span>Creators keeps 94% of their earnings!</span>
        <span>Creators pay $25/mth or $240 yearly.</span>
      </div>
    </form>
  );
};

export default FormLogin;
