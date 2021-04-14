import AuthLayout from "./auth.layout";
import LoginPage from "./login.page";
import RegisterPage from "./register.page";
import ForgotPasswordPage from "./forgot-password.page";
import { NotFoundPage } from "../core/not-found.page";

export const authRoutes = {
  path: "/auth",
  layout: AuthLayout,
  routes: [
    {
      exact: true,
      path: "/auth/login",
      component: LoginPage,
    },
    {
      exact: true,
      path: "/auth/register",
      component: RegisterPage,
    },
    {
      exact: true,
      path: "/auth/forgot-password/:token",
      component: ForgotPasswordPage,
    },
    {
      path: "/auth/*",
      component: NotFoundPage,
    },
  ],
};
