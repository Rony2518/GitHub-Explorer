import { lazy } from "react";
import Home from "../components/Home";
const Users = lazy(() => import("../components/Users"));
const Profile = lazy(() => import("../components/UserProfile"));
const Search = lazy(() => import("../components/Search"));
const NotFound = lazy(() => import("../components/NotFound"));
const Login = lazy(() => import("../components/Login"));
const AuthProfile = lazy(() => import("../components/AuthProfile"));

export const AppRoutes = [
  {
    path: "/",
    element: Home,
    isAuthRequire: false,
  },
  {
    path: "/users",
    element: Users,
    isAuthRequire: false,
  },
  {
    path: "/userProfile/:username",
    element: Profile,
    isAuthRequire: false,
  },
  {
    path: "/authProfile",
    element: AuthProfile,
    isAuthRequire: true,
  },
  {
    path: "/search",
    element: Search,
    isAuthRequire: false,
  },
  {
    path: "/login",
    element: Login,
    isAuthRequire: false,
  },
  {
    path: "*",
    element: NotFound,
    isAuthRequire: false,
  },
];
