import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import todoReducer from "./state-management/Todos/TodoReducer"
import TodoContext from "./state-management/Todos/todoContext"
import Login from "./components/Login"
import authReducer from "./reducers/authReducer"
import userContext from "./contexts/userContext"
import AuthProvider from "./AuthProvider"
import TodoProvider from "./state-management/Todos/TodoProvider"





const App = () => {


  //moved the code authReducer to AuthProvider file
  // const  [user, userDispatch] = useReducer(authReducer, '')
  

  return (
  <>


  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login/> */}

<AuthProvider>


<TodoProvider>
{/* <userContext.Provider value={{user, dispatch: userDispatch}}> */}

<MyNavbar/>
<HomePage/>
</TodoProvider>

</AuthProvider>

{/* </userContext.Provider> */}

  </>
  );
};
export default App;