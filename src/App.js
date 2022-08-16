import { Routes, Route, Link } from 'react-router-dom'
import { Aboutpage } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
import { Homepage } from './pages/Homepage'
import { Notfoundpage } from './pages/Notfoundpage'
import { Singlepage } from './pages/Singlepge'
import { Createpost } from './pages/Createpost'
import { Editpost } from './pages/Editpost'
import { Layout } from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='posts' element={<Blogpage />} />
          <Route path='posts/:id' element={<Singlepage />} />
          <Route path='posts/:id/edit' element={<Editpost />} />
          <Route path='posts/new' element={<Createpost />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
