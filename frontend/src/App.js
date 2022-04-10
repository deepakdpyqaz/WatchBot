import React from "react";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import WebFont from "webfontloader";
import BusinessPage from "./Components/AdminPage/businessPage";
import Home from "./Components/HomePage/home";
import Registration from "./Components/RegistrationPage/Registration";
import Setting from "./Components/setting/setting";
import Setting from "./Components/setting/setting";
import Blocklist from "./Components/Blocklist/Blocklist"
// import Loader from "./Components/layout/Loader/loader";

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
        <Route path="/registerpage" element={<Registration/>}/>
        <Route path="/registerpage/main" element={<BusinessPage/>}/>
        <Route path="/registerpage/setting" element={<Setting/>}/>
        <Route path="/registerpage/setting" element={<Setting/>}/>
        <Route path="/todolist" element={<Blocklist/>}/>
      </Routes>
    </Router>
  );
}

export default App;
