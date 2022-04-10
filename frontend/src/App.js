import React from "react";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import WebFont from "webfontloader";
import BusinessPage from "./Components/AdminPage/businessPage";
import Home from "./Components/HomePage/home";
import Registration from "./Components/RegistrationPage/Registration";
// import Loader from "./Components/layout/Loader/loader";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactUsPage/contact";

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Baloo Bhai"],
      }
    })
  },[]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/registerpage" element={<Registration/>}/> */}
        <Route path="/registerpage/main" element={<BusinessPage/>}/>
        <Route path="/registerpage/about" element={<About/>}/>
        <Route path="/registerpage/contact" element={<Contact/>}/>

      </Routes>
    </Router>
  );
}

export default App;
