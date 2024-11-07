import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
// import LIstPage from "./UsersList";
// import ContactPage from "./ContactPage";
// import DetailsPage from "./UserDetails";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import UserDetails from "./UserDetails";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
          { path: "", element: <HomePage /> },
          { path: "login", element:<LoginPage/> },
          
        ],
      },

      {
        element:<PrivateRoutes/>,
        children: [
            {
                path: "users",
                element: <UsersPage />,
                children: [
                    { path: ":id", 
                      element: <UserDetails /> 
                    },
                ],
              },
        ]
      }
  


]);

export default router;




