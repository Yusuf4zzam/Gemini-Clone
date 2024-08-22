import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterWrapper from "./component/RouterWrapper";
import ErrorBlock from "./component/ErrorBlock";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterWrapper />,
    errorElement: <ErrorBlock />,
  },
  // Add more routes as needed...
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
