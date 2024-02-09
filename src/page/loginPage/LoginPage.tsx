import Footer from "../../component/etc/Footer";
import FormLogin from "../../component/loginPage/FormLogin";
import LoginLeftSide from "../../component/loginPage/LoginLeftSide";
import RegisterForm from "../../component/registerForm/RegisterForm";
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
    <div className="flex flex-col min-h-[100vh] min-w-[320px]">
      <div className="flex flex-col md:flex-row min-h-[100vh] w-full">
        <LoginLeftSide />
        {isOpenRegister ? (
          <RegisterForm handleClose={() => setIsOpenregister(false)} />
        ) : (
          <FormLogin
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            setIsOpenregister={setIsOpenregister}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
