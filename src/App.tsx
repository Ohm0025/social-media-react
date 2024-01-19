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
import { useTokenCookies } from "./store/cookies";

function App() {
  const [cookies, setCookie, removeCookie]: any = useCookies([BBB_COOKIES]);
  const [isValidUser, setIsValidUser] = useState(false);

  const callData = async () => {
    try {
      const result = await callToken(cookies[BBB_COOKIES]);
      setIsValidUser(result.data?.cookies);
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
            <LayoutHome removeCookie={removeCookie} />
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
    <div className="bg-[#d5d5d5]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
