// import React, { Fragment } from 'react'
import React from "react";
import "./About.css";
import sideimg from "../../assests/side.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="aboutcontainer" id="about">
        <h1>About Us</h1>
        <div className="dflex">
          <div style={{ "width": "60vw" }}>
            <hr/>

            <p>A computer vision and machine learning model would be created to detect the license plate of vehicles
              using
              the surveillance camera and the vehicle number would be extracted from the license plate and this
              can be
              used for various purposes like authorizing vehicle, monitoring entry and exit time of vehicle.

            </p>
            <p>
              It can be used in warehouses for detection and verification of loading vehicles and it can also be
              used for
              detecting the entry of any vehicle in the premises.
              Parking spaces can be pre-booked and assigned a slot digitally and the parking charges can be
              calculated on
              the basis of arrival and departure time of vehicles.
              Vehicles can be verified during the entry without any human efforts.
            </p>
          </div>
          <div style={{ "margin": "0px 10px", "border": "0.5px solid grey", "borderRadius": "10%" }}>

            <img style={{ "borderRadius": "10%", "src": "side.jpeg", "alt": "para image" }} src={sideimg} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default About