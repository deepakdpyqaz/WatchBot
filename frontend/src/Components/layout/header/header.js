import React from 'react'
import "./header.css"
import { IconButton } from '@mui/material'
import Avatar from "@mui/material/Avatar"
import AvatarImg from '../../../assests/userImage/AvatarImg.jpg';
// import Img from '../../../assets/logo/logo1.jpg'
import Sidebar from '../sidebar/sidebar.js'


const header = () => {
    return (
        <>
          <div className="header">
            <div className="header_info">
                <Sidebar />
                {/* <img src={Img} id="header_img" alt="failed-to-fetch"/> */}
                <div className="info">
                  WatchBot
                </div>
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

export default header
