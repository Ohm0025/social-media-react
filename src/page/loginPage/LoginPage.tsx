import Footer from "../../component/etc/Footer";
import LoginLeftSide from "../../component/loginPage/LoginLeftSide";
import FormLogin from "../../component/loginPage/formLogin";
import ModalRegister from "../../component/registerModal/ModalRegister";
import { useLoginPage } from "./LoginPage.hook";

const LoginPage = () => {
  const {
    isOpenRegister,
    setIsOpenregister,
    fieldLogin: register,
    handleSubmit,
    errors,
  } = useLoginPage();

  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="flex flex-col justify-center px-7 md:mt-auto min-h-[90vh] md:items-center md:flex-row">
        <LoginLeftSide />
        <FormLogin
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          setIsOpenregister={setIsOpenregister}
        />
      </div>
      <Footer />
      <ModalRegister
        isOpen={isOpenRegister}
        handleClose={() => setIsOpenregister(false)}
      />
    </div>
  );
};

export default LoginPage;
