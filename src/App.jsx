import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import JobForm from "./pages/JobForm/JobForm";
import About from "./pages/About/About";
import Resources from "./pages/Resources/Resources";
import * as authService from "./services/authService";
import JobDetails from "./pages/JobDetails/JobDetails";
import dummydata from "../src/components/JobsMap/dummydata.js";
import "./App.css";
import Favorites from "./pages/Favorites/Favorites";

const App = () => {
  // const [user, setUser] = useState(authService.getUser())
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [searchShow, setSearchShow] = useState(false);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(dummydata);
    // const jobs = axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/jobs`)
    // .then(res=>{
    //   setJobs(res.data)
    //   console.log(res.data)
    // })
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <div className="mainContainer">
      <NavBar
        setSearchShow={setSearchShow}
        searchShow={searchShow}
        user={user}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              setSearchShow={setSearchShow}
              searchShow={searchShow}
              setJobs={setJobs}
              jobs={jobs}
              user={user}
            />
          }
        />
        <Route
          path="/job/:id"
          element={
            <JobDetails
              favorites={favorites}
              setFavorites={setFavorites}
              jobs={jobs}
            />
          }
        />

        <Route
          path="/signup"
          element={
            <Signup
              handleSignupOrLogin={handleSignupOrLogin}
              setUser={setUser}
              userState={user}
            />
          }
        />

        <Route
          path="/favorites"
          element={<Favorites user={user} favorites={favorites} />}
        />
        <Route
          path="/login"
          element={
            <Login
              handleSignupOrLogin={handleSignupOrLogin}
              setUser={setUser}
              userState={user}
            />
          }
        />
        <Route path="/jobform" element={<JobForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
// hello world
