import HomePage from "../page/HomePage";
import NotFoundPage from "../page/NotFoundPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
