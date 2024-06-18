import React, { useContext } from 'react'
import { Context } from '../../App'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const { tokenState } = useContext(Context)
    return tokenState.token ? <Outlet /> : <Navigate to={'/login'} />

}

export default ProtectedRoutes