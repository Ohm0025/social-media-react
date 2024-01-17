import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loginUserService } from "./service/testaxios";
import { useEffect } from "react";
import HomePage from "./page/HomePage";

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
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <h1>Login page</h1>,
        },
        {
          path: "register",
          element: <h1>register page</h1>,
        },
        {
          path: "profile",
          element: <h1>Profile page</h1>,
        },
        {
          path: "friend",
          element: <h1>Friend page</h1>,
        },
      ],
    },
  ]);

  return (
    <div className="bg-[#d5d5d5] min-h-[100vh]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
