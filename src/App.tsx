import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import LoginPage from "./page/loginPage/LoginPage";
import ProfilePage from "./page/profilePage/ProfilePage";
import LayoutHome from "./layout/LayoutHome";
import FriendPage from "./page/friendPage/FriendPage";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { callToken } from "./api/authenticate";
import { useLoading } from "./store/loading";
import BackDropLoading from "./component/backDropLoaing/BackDropLoading";
import DelayBox from "./component/delayBox/DelayBox";
import { ToastContainer, toast } from "react-toastify";
import { useUser } from "./store/user";
import ChatPage from "./page/chagePage/ChatPage";
import { AxiosError } from "axios";

function App() {
  const BBB_COOKIES = import.meta.env.BBB_COOKIES;
  const [cookies, ,] = useCookies<string>([BBB_COOKIES]);
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
        .catch((err: AxiosError | any) => {
          console.log(err);
          toast.error(err.response?.data?.message);
        });

      setTimeout(() => {
        closeIsLoading();
      }, 700);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
    callData();
  }, [cookies[BBB_COOKIES]]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>{userObj.userid ? <LayoutHome /> : <LoginPage />}</>,
      children: [
        {
          path: "",
          element: <HomePage />,
        },

        {
          path: "profile",
          element: <ProfilePage callData={callData} />,
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
      path: "/authen/",
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
        autoClose={1000}
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
