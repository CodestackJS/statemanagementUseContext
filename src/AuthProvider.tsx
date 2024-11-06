import { ReactNode, useReducer } from "react"
import userContext from "./contexts/userContext";
import authReducer from "./reducers/authReducer";



interface Props {
    children: ReactNode;

}


const AuthProvider = ({children} : Props) => {

    const  [user, dispatch] = useReducer(authReducer, '')



  return (
        <userContext.Provider value={{user, dispatch}}>

        {children}


        </userContext.Provider>


  )
}

export default AuthProvider