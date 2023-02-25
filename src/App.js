import { StyledEngineProvider } from "@mui/material";
import { Route, Router, Routes } from "react-router-dom";
import withLayout from "./layout/Layout";
import routes from "./routes/routes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </StyledEngineProvider>
  );
}

export default withLayout(App);
