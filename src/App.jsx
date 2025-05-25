
import { Routes, Route, } from 'react-router-dom'
import Layout from './HOC/Layout'
import Home from './Pages/Home'
import Library from './Pages/Library'
import AskAi from './Pages/AskAi'
import Reports from './Pages/Reports'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import ChooseRole from './Pages/ChooseRole'
import SignUpPage from './Pages/SignUpPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/SignUp' element={<ChooseRole />} />
        <Route path='/SignUpForm' element={<SignUpPage />}/>

        <Route path='/app' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Library' element={<Library />} />
          <Route path='Reports' element={<Reports />} />
          <Route path='AskAi' element={<AskAi />} />
        </Route>
        

      </Routes>
    </>
  )
}

export default App
