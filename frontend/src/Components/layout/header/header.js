import React,{useRef,useEffect} from 'react'
import "./header.css"
import { IconButton } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import Avatar from "@mui/material/Avatar"
import AvatarImg from '../../../assests/userImage/AvatarImg.jpg';
// import Img from '../../../assets/logo/logo1.jpg'
import Sidebar from '../sidebar/sidebar.js';
import {useLocation} from "react-router-dom";


const Header = () => {
   const header_ref = useRef();
   const location = useLocation();
   useEffect(()=>{
     if(header_ref.current){
       header_ref.current.nextSibling.style.paddingTop = "30px";
     }
   },[location])
    return (
        <>
          <div className="header" ref={header_ref}>
            <div className="header_info">
                <Sidebar className="sidebar-icon"/>
                {/* <img src={Img} id="header_img" alt="failed-to-fetch"/> */}
                <div className="info">
                  WatchBot
                </div>
            </div>
            <div className="header_search">
              <IconButton>
                <SearchIcon/>
              </IconButton>
                <input type="text" name="search" placeholder='search' />
            </div>  
            <div className="header_right">
              <IconButton>
                <Avatar src={AvatarImg} alt="failed-to-fetch"/>
              </IconButton>
            </div>  

          </div>
        </>
    )
}

export default Header
