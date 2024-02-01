import Footer from "../../component/etc/Footer";
import FormLogin from "../../component/loginPage/FormLogin";
import LoginLeftSide from "../../component/loginPage/LoginLeftSide";
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
      <div className="flex flex-col md:flex-row min-h-[100vh] w-full">
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
