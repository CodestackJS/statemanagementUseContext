//10.28.24

import { useContext } from "react";
import userContext from "../contexts/userContext";

const useAuth = () => useContext(userContext);



export default useAuth;