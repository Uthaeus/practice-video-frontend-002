import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/layouts/main-layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ErrorPage from "./components/error/error";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";
import Projects from "./pages/projects";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: '/projects',
        element: <Projects />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
