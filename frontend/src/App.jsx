import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetUp from "./components/admin/CompanySetUp";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path:"/description/:id",
      element:<JobDescription/>
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    // admin routes
    {
      path:"/admin/companies",
      element:<Companies/>
    },
    {
      path:"/admin/companies/create",
      element:<CompanyCreate/>
    },
    {
      path:"/admin/companies/:id",
      element:<CompanySetUp/>
    },
    {
      path:"/admin/jobs",
      element:<AdminJobs/>
    },
    {
      path:"/admin/jobs/create",
      element:<PostJob/>
    },
    {
      path:"/admin/jobs/:id/applicants",
      element:<Applicants/>
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
