import { PATHS } from "./paths";
import ColorPallettePage from "../Pages/ColorPallette/ColorPallettePage";
import HomePage from "../Pages/Home/HomePage";
import NotesPage from "../Pages/Notes/NotesPage";
import PomodoroPage from "../Pages/Pomodoro/PomodoroPage";
import TodoPage from "../Pages/Todo/TodoPage";

export const ROUTES = [
  { id: "homeID", path: PATHS.home, exact: true, element: <HomePage /> },
  { id: "todoID", path: PATHS.todo, exact: true, element: <TodoPage /> },
  { id: "notesID", path: PATHS.notes, exact: true, element: <NotesPage /> },
  {
    id: "colorPalletteID",
    path: PATHS.colorPallette,
    exact: true,
    element: <ColorPallettePage />,
  },
  {
    id: "pomodoroID",
    path: PATHS.pomodoro,
    exact: true,
    element: <PomodoroPage />,
  },
];
