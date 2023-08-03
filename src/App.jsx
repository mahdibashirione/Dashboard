import { Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404Page";

function App() {
  const router = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/*", element: <NotFoundPage /> },
  ]);

  return router;
}

export default App;
