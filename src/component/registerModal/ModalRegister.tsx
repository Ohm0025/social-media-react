import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputText from "../loginPage/InputText";
import { useForm } from "react-hook-form";
import { userRegister } from "../../api/authenticate";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "0px",
  borderRadius: "10px",
  boxShadow: 24,
  backgroundColor: "white",
  p: 4,
};

const ModalRegister = ({ isOpen, handleClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      const res = await userRegister(data);
      console.log(res);
      if (res.status === 201) {
        toast.success(res.data?.message);
        handleClose();
      }
    } catch (err: any) {
      console.log(err.response?.data?.message);
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Register Form
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 my-4">
          <InputText
            objInput={register("FirstName", {
              required: {
                value: true,
                message: "firstname is required",
              },
            })}
            errors={errors}
            type="text"
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
          />
          <div>
            <label htmlFor="BirthDate">
              <small className="text-secondary">Birthdate</small>
            </label>
            <InputText
              objInput={register("BirthDate", {
                required: {
                  value: true,
                  message: "birthdate is required",
                },
              })}
              errors={errors}
              type="date"
            />
          </div>
          <button type="submit" className="bg-[#ffcb08] py-2 rounded-md">
            Submit
          </button>
          <button type="reset" className="bg-[#d3d3d3] py-2 rounded-md">
            Clear
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalRegister;
