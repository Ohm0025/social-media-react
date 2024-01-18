import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
type Props = {
  objInput: UseFormRegisterReturn;
  errors: FieldErrors;
  type?: string;
};

const InputText = (props: Props) => {
  return (
    <div className="relative flex flex-col">
      <input
        {...props.objInput}
        type={props.type || "text"}
        placeholder={props.objInput.name}
        className={`border py-1 px-2 outline-black ${
          !props.errors[props.objInput.name]?.message
            ? "border - gray - 400"
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
