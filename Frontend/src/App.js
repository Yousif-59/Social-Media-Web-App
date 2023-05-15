import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import AboutUs from "./pages/home/AboutUs";
import ContactUs from "./pages/home/ContactUs";
import Questions from "./pages/home/Questions";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { user } = useContext(AuthContext)
  return (
    <>    
    {/* <Route exact path="/" element={user ? <Home /> : <Register/>} /> */}
    <div> 
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register/>} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/aboutUs" element ={<AboutUs />} />
        <Route path="/contactUs" element ={<ContactUs />} />
        <Route path="/questions" element = {<Questions />} />
      </Routes>
    </div>
    </> 

  );
}

export default App;
