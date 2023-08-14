import { Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404Page";
import ProductListPage from "./pages/ProductList";

function App() {
  const router = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/Products", element: <ProductListPage /> },
    { path: "/*", element: <NotFoundPage /> },
  ]);

  return router;
}

export default App;
