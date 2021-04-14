import EmployeeLayout from "./employee.layout";
import EmployeeGuard from "./employee.guard";
import ProtectedEmployeePage from "./protected-employee.page";
import { NotFoundPage } from "../core/not-found.page";

export const employeeRoutes = {
  path: "/employee",
  layout: EmployeeLayout,
  guard: EmployeeGuard,
  routes: [
    {
      exact: true,
      path: "/employee/protected",
      component: ProtectedEmployeePage,
    },
    {
      path: "/employee/*",
      component: NotFoundPage,
    },
  ],
};
