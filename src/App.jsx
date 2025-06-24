import "./App.css";
import Layout from "./Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Application from "./Components/Application";
import Context from "./Context/Context";
import Profile from "./Components/Profile";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/application",
          element: <Application />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <Context>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Context>
  );
}

export default App;
