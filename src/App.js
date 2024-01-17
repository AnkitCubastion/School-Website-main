import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  Login,
  Landing,
  Error,
  HomeLayout,
  Register,
  Notice,
  Courses,
  Faculties,
  Result,
  AboutUs,
  SingleFaculty,
} from "./Pages";
import {loader as FacultyLoader} from "../src/Pages/Faculties";
import {loader as NoticeLoader} from "../src/Pages/Notice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path:"notices",
        element:<Notice/>,
        errorElement:<Error/>,
        loader:NoticeLoader
      },
      {
        path: "courses",
        element: <Courses />,
        errorElement: <Error />,
      },
      {
        path: "faculties",
        element: <Faculties />,
        errorElement: <Error />,
        loader: FacultyLoader,
      },
      {
        path: "faculties/:id",
        element: <SingleFaculty />,
        errorElement: <Error />,
      },
      {
        path: "results",
        element: <Result />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <AboutUs />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  console.log(nanoid());
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
