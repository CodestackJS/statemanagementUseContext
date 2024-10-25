import { Dispatch } from "react";
import { Todo, TodoAction } from "../reducers/TodoReducer";
import React from "react";
import { AuthAction } from "../reducers/authReducer";


interface userContextType {
    user: string;
    dispatch: Dispatch<AuthAction>;
}

const userContext = React.createContext<userContextType>({} as userContextType) 

export default userContext;