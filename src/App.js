import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  Login,
  Landing,
  Error,
  HomeLayout,
  Register,
  Notice,
  Faculties,
  Result,
  AboutUs,
  SingleFaculty,
  Recruitment,
} from "./Pages";

import { loader as NoticeLoader } from "../src/Pages/Notice";
import Classes from "./Pages/Classes";
import { loader as FacultyLoader } from "../src/Pages/Faculties";
import { loader as StudentLoader } from "../src/Pages/Students";
import { loader as ClassLoader } from "../src/Pages/Classes";
import { loader as SingleClassLoader } from "../src/Pages/SingleClasses";
import { loader as SingleStudentLoader } from "../src/Pages/SingleStudent";
import { SingleClasses } from "./Pages/SingleClasses";
import { loader as SingleFacultyLoader } from "./Pages/SingleFaculty";
import { Students } from "./Pages/Students";
import { SingleStudent } from "./Pages/SingleStudent";
import { loader as ResultLoader } from "./Pages/Result";
import FounderDescription from "./Component/FounderDescription";
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
        path: "notices",
        element: <Notice />,
        errorElement: <Error />,
        loader: NoticeLoader,
      },
      {
        path: "classes",
        element: <Classes />,
        errorElement: <Error />,
        loader: ClassLoader,
      },
      {
        path: "classes/:id",
        element: <SingleClasses />,
        errorElement: <Error />,
        loader: SingleClassLoader,
      },
      {
        path: "students",
        element: <Students />,
        errorElement: <Error />,
        loader: StudentLoader,
      },
      {
        path: "students/:id",
        element: <SingleStudent />,
        errorElement: <Error />,
        loader: SingleStudentLoader,
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
        loader: SingleFacultyLoader,
      },
      {
        path: "results",
        element: <Result />,
        errorElement: <Error />,
        loader: ResultLoader,
      },
      {
        path: "about",
        element: <AboutUs />,
        errorElement: <Error />,
      },
      {
        path: "recruitment",
        element: <Recruitment />,
        errorElement: <Error />,
      },
      {
        path: "founders/:id",
        element: <FounderDescription />,
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
  // console.log(nanoid());
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
