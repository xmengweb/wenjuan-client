import React from "react";
import { Navigate, createHashRouter } from "react-router-dom";
import MainLayout from "@/layouts/MayLayout";
// const App = React.lazy(() => import('@/App'))
const Login = React.lazy(() => import("@/views/Login"));
const Registry = React.lazy(() => import("@/views/Registry"));
const NotFound = React.lazy(() => import("@/views/NotFound"));
const Home = React.lazy(() => import("@/views/Home"));
const Manage = React.lazy(() => import("@/views/manage/Index"));
const ManageList = React.lazy(() => import("@/views/manage/List"));
const ManageStar = React.lazy(() => import("@/views/manage/Star"));
const ManageTrash = React.lazy(() => import("@/views/manage/Trash"));
const QuestionEdit = React.lazy(() => import("@/views/question/Edit"));
const QuestionStat = React.lazy(() => import("@/views/question/Stat"));
const QuestionLayout = React.lazy(() => import("@/views/question/Index"));

export const routes = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "question",
    element: <QuestionLayout />,
    children: [
      {
        path: "edit/:id",
        element: <QuestionEdit />,
      },
      {
        path: "stat/:id",
        element: <QuestionStat />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registry",
        element: <Registry />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "manage",
        element: <Manage />,
        children: [
          {
            path: "list",
            element: <ManageList />,
          },
          {
            path: "star",
            element: <ManageStar />,
          },
          {
            path: "trash",
            element: <ManageTrash />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
