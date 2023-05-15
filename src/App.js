import React, { lazy, Suspense } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { Aboutpage } from './pages/Aboutpage'
// import { Blogpage } from './pages/Blogpage'
// import { Homepage } from './pages/Homepage'
import { Notfoundpage } from './pages/Notfoundpage'
import { Singlepage } from './pages/Singlepge'
import { Createpost } from './pages/Createpost'
import { Editpost } from './pages/Editpost'
import { Layout } from './components/Layout'
import { Loginpage } from './pages/Loginpage'
import { RequireAuth } from './hok/RequireAuth'
import { AuthProvider } from './hok/AuthProvider'

const Homepage = lazy(() => import('./pages/Homepage'))

const fakeDelay = (promise) => {
  return new Promise(resolve => {
    setTimeout(resolve, 3000)
  }).then(() => promise)
}

const Blogpage = lazy(() => fakeDelay(import('./pages/Blogpage')))

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Suspense fallback={<p>Loading...</p>}> <Homepage /> </Suspense>} />
          <Route path='posts' element={<Suspense fallback={<p>Loading...</p>}> <Blogpage /> </Suspense>} />
          <Route path='posts/:id' element={<Singlepage />} />
          <Route path='posts/:id/edit' element={<Editpost />} />
          <Route path='posts/new' element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>
          } />
          <Route path='about' element={<Aboutpage />}>
            <Route path='contacts' element={<p>This is Our Contacts</p>} />
          </Route>
          <Route path='about-us' element={<Navigate to='/about' replace />} />
          <Route path='login' element={<Loginpage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
