import { PATHS } from "./paths";
import LandingPage from "../pages/LandingPage/LandingPage";
export const routes = [
  {
    exact: true,
    path: PATHS.root,
    element: <LandingPage />,
  },
];
