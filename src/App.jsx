import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/home";
import About from "@/pages/about";
import RootLayout from "@/layouts";
import Projects from "@/pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
