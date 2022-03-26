import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Components/Homepage';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';
import SideDrawer from './Components/SideDrawer';
import Create from './Components/Create';
import TopBar from './Components/TopBar';
import Designs from './Components/Designs';
import Projects from './Components/Projects';
import Settings from './Components/Settings';
import './App.css';
import Landingpage from './Components/Landingpage';

function App() {
  return (
    <Router> 
      <TopBar/>
      <div className="App">
      <SideDrawer/>
        <Routes>
            <Route path="/login" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/create" element={
              <ProtectedRoute redirectTo="/login">
                <Create/>
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute redirectTo="/login">
                <Homepage/>
              </ProtectedRoute>
            } exact/>
            <Route path="/design" element={
            <Designs/>
            }/>
            <Route path="/settings" element={
              <ProtectedRoute redirectTo="/login">
                <Settings/>
              </ProtectedRoute>
            }/>
        </Routes>
      </div>
    </Router>
  );
}

const ProtectedRoute = ({ children, redirectTo}) => {
  const isLoggedIn = localStorage.getItem("userInfo");
  console.log("this", isLoggedIn);

  return (  
      isLoggedIn ? children : <Navigate to={redirectTo} />
  
  );
}

export default App;
