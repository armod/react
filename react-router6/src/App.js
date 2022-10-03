import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import Share from './pages/Share'
import SingleProducts from './pages/SingleProduct'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProductLayout from './pages/SharedProductLayout'
function App() {
  const [user, setUser] = useState()
  return (
    <BrowserRouter>
      {/* <nav>our navbar</nav> */}
      <Routes>
        <Route path='/' element={<Share />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productID' element={<SingleProducts />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>our footer</footer> */}
    </BrowserRouter>
  )
}

export default App
