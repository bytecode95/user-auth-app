import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from '../components/Navbar'

const Home = lazy(() => import('../pages/Home'));
const UserReg = lazy(() => import('../pages/UserLog'));
const UserLog = lazy(() => import('../pages/UserLog'));
const BookingConfirm = lazy(() => import('../pages/BookingConfirm'));
const PrivateRoutes = lazy(() => import('../routes/PrivateRoute'));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1>Loading!..</h1>}>
        <Routes>
          <Route path={'*'} element={<Home />} />
          <Route path={'/signup'} element={<UserReg />} />
          <Route path={'/login'} element={<UserLog />} />
          <Route element={<PrivateRoutes />}>
            <Route path={'/booking'} element={<BookingConfirm />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
