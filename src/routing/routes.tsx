import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
// import LIstPage from "./UsersList";
// import ContactPage from "./ContactPage";
// import DetailsPage from "./UserDetails";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import UserDetails from "./UserDetails";


const router = createBrowserRouter([

    {
        path:"/",
        element:<Layout/>,
        children:[
            {path:"", element:<HomePage/>},
           
        ],
    },

    {
        path:"users", 
        element:<UsersPage/>,
        children: [
            {
            path:":id", 
            element:<UserDetails/>
            },
        ]
    },
  


]);

export default router;




