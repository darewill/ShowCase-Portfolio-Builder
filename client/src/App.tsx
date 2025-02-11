import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "../style/App.css";
import Home from "./Home";

export default function App() {
  const Homepage = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
}
