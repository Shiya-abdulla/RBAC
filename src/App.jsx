import { useState } from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Usermngment from './Pages/Usermngment'
import Rolemngmnt from './Pages/Rolemngmnt'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Auditlogs from './Pages/Auditlogs'
import Settings from './Pages/Settings'
import Support from './Pages/Support'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div className="  main-content  ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Usermngment />} />
          <Route path="/roles" element={<Rolemngmnt />} />
          <Route path="/audit" element={<Auditlogs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/supports" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
