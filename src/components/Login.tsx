import { useContext, useReducer, useState } from 'react';
import authReducer from '../reducers/authReducer';
import userContext from '../contexts/userContext';

const Login  = () => {
  
//   const [username, setUsername] = useState<string>('Jose!');
  const {user, dispatch} = useContext(userContext)

  // Handle login
  const handleLogin = () => {
   dispatch({type:'LOGIN', username:'Jose!'})
  }
  // Handle logout
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
};
  

  return (
    <div className="container mt-5">
      <h1 className="mb-4"></h1>
      {user ? (
          <div>
            <h2>It is I, {user}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;