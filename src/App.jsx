import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import JobForm from './pages/JobForm/JobForm'
import Saved from './pages/Saved/Saved'
import About from './pages/About/About'
import * as authService from './services/authService'
import JobDetails from './pages/JobDetails/JobDetails'
import dummydata from '../src/components/JobsMap/dummydata.js'

const App = () => {
  const [user, setUser] = useState(authService.getUser())

  const [jobs, setJobs] = useState([])

  console.log(dummydata)

  useEffect(()=>{

    setJobs(dummydata)

  },[])


  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing setJobs={setJobs} jobs={jobs} user={user} />} />
        <Route path="/job/:id" element={<JobDetails jobs={jobs}/>}/>
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/jobform"
          element={<JobForm />}
        />
        <Route
          path="/saved"
          element={<Saved />}
        />
        <Route
          path="/About"
          element={<About />}
        />

        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
