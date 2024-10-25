import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import todoReducer from "./reducers/TodoReducer"
import TodoContext from "./contexts/todoContext"
import Login from "./components/Login"
import authReducer from "./reducers/authReducer"
import userContext from "./contexts/userContext"





const App = () => {

  const [todos,dispatch] = useReducer(todoReducer,[])
  const  [user, userDispatch] = useReducer(authReducer, '')

  return (
  <>


  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login/> */}

<TodoContext.Provider value={{todos, dispatch:dispatch}}>
<userContext.Provider value={{user, dispatch: userDispatch}}>

<MyNavbar/>
<HomePage/>

</userContext.Provider>



</TodoContext.Provider>


  </>
  );
};
export default App