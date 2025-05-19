import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route,} from 'react-router-dom'
import Layout from './HOC/Layout'
import Home from './Pages/Home'
import Library from './Pages/Library'
import AskAi from './Pages/AskAi'
import Reports from './Pages/Reports'
import ProtectedRoute from './Pages/ProtectedRoute'
import LoginPage from './Pages/LoginPage'
import ChooseRole from './Pages/ChooseRole'
import SignUpPage from './Pages/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
     <Route element={<ProtectedRoute/>}>

       <Route element={<Layout/>}>
      <Route path='/' element={<Home />}/>
      <Route path='/Library' element={<Library/>}/>
      <Route path='/Reports' element={<Reports/>}/>
      <Route path='/AskAi' element={<AskAi/>}/>
   </Route>
     </Route>
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/SignUp' element={<ChooseRole/>}/>
     <Route path='/SignUpForm' element={<SignUpPage/>}></Route>
     
    </Routes>
    </>
  )
}

export default App
