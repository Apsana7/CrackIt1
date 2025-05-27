
import { Routes, Route, } from 'react-router-dom'
import Layout from './HOC/Layout'
import StuDashboard from './Pages/Student/StuDashboard'
import LoginPage from './Pages/Auth/LoginPage'
import SignUpPage from './Pages/Auth/SignUpPage'
import LandingPage from "./Pages/Common/LandingPage"
import ProtectedRoute from './HOC/ProtectedRoute'
import ChooseRole from './Pages/Common/ChooseRole'


function App() {
   const user = { role: 'Student' }; 

  return (
    <>
     
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignUpPage/>}/>
        <Route path='/role' element={<ChooseRole/>}/>
        <Route element={<ProtectedRoute allowedRoles={['Student']} currentRole={user.role}/>}>
          
        <Route element={<Layout/>}>
            <Route path='/studentDashboard' element={<StuDashboard/>}/>



          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
