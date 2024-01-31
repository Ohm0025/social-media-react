import { FieldErrors, UseFormRegister } from "react-hook-form";

interface LoginObj {
  EmailAddressOrPhoneNumber: string;
  Password: string;
}

interface FormLoginObj {
  handleSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  register: UseFormRegister<LoginObj>;
  errors: FieldErrors<LoginObj>;
  setIsOpenregister: (bool: boolean) => void;
}

export type { LoginObj, FormLoginObj };
