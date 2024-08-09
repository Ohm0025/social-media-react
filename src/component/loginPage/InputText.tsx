import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
type Props = {
  objInput: UseFormRegisterReturn;
  errors: FieldErrors;
  type?: string;
  labelName?: string;
};

const InputText = (props: Props) => {
  return (
    <div className="relative flex flex-col">
      <label className="text-[14px] text-textTwo">{props.labelName}</label>
      <input
        {...props.objInput}
        type={props.type || "text"}
        className={`border py-1 px-2 outline-primary rounded-[4px] text-[18px] w-fit sm:w-full ${
          !props.errors[props.objInput.name]?.message
            ? "border-strokeOne bg-fillOne"
            : "border-[red] bg-[#dc99995d]"
        }`}></input>
      {props.errors[props.objInput.name]?.message && (
        <small className="text-[red] absolute z-10 top-[100%]">
          {props.errors[props.objInput.name]?.message?.toString()}
        </small>
      )}
    </div>
  );
};

export default InputText;
