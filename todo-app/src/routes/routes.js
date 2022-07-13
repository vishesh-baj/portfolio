import { PATHS } from "./paths";
import Home from "../pages/Home";
import About from "../pages/About";
import Todo from "../pages/Todo";
import Notes from "../pages/Notes";
export const routes = [
  {
    path: PATHS.home,
    element: <Home />,
  },
  {
    path: PATHS.about,
    element: <About />,
  },
  {
    path: PATHS.todo,
    element: <Todo />,
  },
  {
    path: PATHS.notes,
    element: <Notes />,
  },
];
