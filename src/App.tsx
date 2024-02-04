import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import LoginPage from "./page/loginPage/LoginPage";
import ProfilePage from "./page/ProfilePage";
import LayoutHome from "./layout/LayoutHome";
import FriendPage from "./page/FriendPage";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { callToken } from "./api/callToken";
import { BBB_COOKIES } from "./utils/constant";
import { useLoading } from "./store/loading";
import BackDropLoading from "./component/backDropLoaing/BackDropLoading";
import DelayBox from "./component/delayBox/DelayBox";
import { ToastContainer, toast } from "react-toastify";
import { useUser } from "./store/user";
import ChatPage from "./page/ChatPage";
import { AxiosError } from "axios";

function App() {
  const [cookies, setCookie, removeCookie]: any = useCookies([BBB_COOKIES]);

  const { isLoading, openIsLoading, closeIsLoading } = useLoading();
  const { setUserObj, userObj, resetObj } = useUser();

  const callData = async () => {
    try {
      openIsLoading();
      callToken(cookies[BBB_COOKIES])
        .then((res) => {
          if (res.data?.data) {
            setUserObj({ ...res.data.data });
          } else {
            resetObj();
          }
        })
        .catch((err: AxiosError) => {
          console.log(err);
          toast.error(err.message);
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
      element: <>{userObj.userid ? <LayoutHome /> : <LoginPage />}</>,
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
          path: "profile/:searchUserId",
          element: <ProfilePage />,
        },
        {
          path: "friend",
          element: <FriendPage />,
        },
        {
          path: "demochat",
          element: <ChatPage />,
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
    <>
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
    </>
  );
}

export default App;
