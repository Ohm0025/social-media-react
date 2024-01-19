import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import LayoutHome from "./layout/LayoutHome";
import FriendPage from "./page/FriendPage";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { callToken } from "./api/callToken";
import { useTokenCookies } from "./store/cookies";

function App() {
  const [cookies]: any = useCookies([]);
  const { setTokenCookies } = useTokenCookies();
  const [isValidUser, setIsValidUser] = useState(false);

  const callData = async () => {
    const result = await callToken(cookies["bumblebee-token"]);
    result && setTokenCookies(cookies["bumblebee-token"]);
  };

  useEffect(() => {
    callData();
  }, [cookies]);

  const router = createBrowserRouter([
    {
      path: "/final-project/",
      element: <>{isValidUser ? <LayoutHome /> : <LoginPage />}</>,
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
