import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import LayoutHome from "./layout/LayoutHome";
import FriendPage from "./page/FriendPage";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { callToken } from "./api/callToken";
import { BBB_COOKIES } from "./utils/constant";
import { useLoading } from "./store/loading";
import BackDropLoading from "./component/backDropLoaing/BackDropLoading";
import DelayBox from "./component/delayBox/DelayBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "./store/user";

function App() {
  const [cookies, setCookie, removeCookie]: any = useCookies([BBB_COOKIES]);
  const [isValidUser, setIsValidUser] = useState(false);
  const { isLoading, openIsLoading, closeIsLoading } = useLoading();
  const { setUserObj } = useUser();

  const callData = async () => {
    try {
      openIsLoading();
      callToken(cookies[BBB_COOKIES])
        .then((res) => {
          setIsValidUser(res.data?.cookies);
          if (res.data?.data) {
            setUserObj({ ...res.data.data });
          }
        })
        .catch((err) => {
          console.log(err);
        });

      setTimeout(() => {
        closeIsLoading();
      }, 700);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callData();
  }, [cookies[BBB_COOKIES]]);

  const router = createBrowserRouter([
    {
      path: "/final-project/",
      element: (
        <>
          {isValidUser ? (
            <LayoutHome
              removeCookie={removeCookie}
              changeValidUser={(value: boolean) => setIsValidUser(value)}
            />
          ) : (
            <LoginPage />
          )}
        </>
      ),
      children: [
        {
          path: "",
          element: <HomePage />,
        },

        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "friend",
          element: <FriendPage />,
        },
      ],
    },
    {
      path: "/final-project/authen/",
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <h1>register page</h1>,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <DelayBox>
        <RouterProvider router={router}></RouterProvider>
      </DelayBox>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BackDropLoading open={isLoading} handleClose={closeIsLoading} />
    </div>
  );
}

export default App;
