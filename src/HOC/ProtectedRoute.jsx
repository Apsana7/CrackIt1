import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ allowedRoles, currentRole }) => {
  if (allowedRoles.includes(currentRole)) {
    return <Outlet />
  } else {
    return <Navigate to="/login" replace />
  }
}

export default ProtectedRoute
