import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserReg from '../pages/UserReg'
import UserLog from '../pages/UserLog'
import './App.css'
import NavBar from '../components/Navbar'
import BookingConfirm from '../pages/BookingConfirm'
import PrivateRoutes from '../routes/PrivateRoute'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'*'} element={<Home />} />
        <Route path={'/signup'} element={<UserReg />} />
        <Route path={'/login'} element={<UserLog />} />
        <Route element={<PrivateRoutes />}>
          <Route path={'/booking'} element={<BookingConfirm />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
