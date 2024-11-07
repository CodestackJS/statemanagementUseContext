import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

  const error = useRouteError();
  console.log(error);
  return (
  <>
    <h1>Yo!! You got an error!!!</h1>
    <p>My sincere apologies, an error has occurred.</p>
  </>
  )
}

export default ErrorPage