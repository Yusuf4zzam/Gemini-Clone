import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterWrapper from "../RouterWrapper";
import ErrorBlock from "../ErrorBlock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterWrapper />,
    errorElement: <ErrorBlock />,
  },
  // Add more routes as needed...
]);

const RoutProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutProvider;
