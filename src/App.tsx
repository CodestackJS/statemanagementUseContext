import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import todoReducer from "./reducers/TodoReducer"





const App = () => {

  const [todos,dispatch] = useReducer(todoReducer,[])

  return (
  <>


  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login/> */}
<MyNavbar/>
<HomePage/>
  </>
  )
}

export default App