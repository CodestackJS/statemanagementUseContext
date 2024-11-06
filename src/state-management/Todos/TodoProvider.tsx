import { ReactNode, useReducer } from "react"
import userContext from "../../contexts/userContext";
import authReducer from "../../reducers/authReducer";
import todoReducer from "./TodoReducer";
import TodoContext from "./todoContext";



interface Props {
    children: ReactNode;

}


const TodoProvider = ({children} : Props) => {

  const [todos,dispatch] = useReducer(todoReducer,[])



  return (
        <TodoContext.Provider value={{todos, dispatch}}>

        {children}


        </TodoContext.Provider>


  )
}

export default TodoProvider;