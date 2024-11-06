

import React from 'react'
import UsersList from './UserList'
import { Outlet } from 'react-router-dom'

const UsersPage = () => {
  return (
    <>
        <div className="row">
            <div className="col">
                <UsersList/>
            </div>
            <div className="col">
                <Outlet/>
            </div>
        </div>
    
    
    
    </>
  )
}

export default UsersPage