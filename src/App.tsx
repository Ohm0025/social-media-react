import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loginUserService } from "./service/testaxios";
import { useEffect } from "react";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import LayoutHome from "./layout/LayoutHome";
import FriendPage from "./page/FriendPage";

function App() {
  const calldata = async () => {
    await loginUserService();
  };
  useEffect(() => {
    calldata();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/final-project/",
      element: <LayoutHome />,
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
