import React, { Fragment, useEffect } from "react";
import "./home.css";
// import Loader from "../views/Loader/Loader.js";
// import {useAlert} from "react-alert";

const Home = () => {
  return (
    <Fragment>
      <div className="home-container">
        <div className="banner">
          <h1>
            Welcome To <span style={{ fontWeight: "200" }}>WatchBot</span>
          </h1>

          <h2>Find Amazing Feature of Managing</h2>
          {/* <h2>CarParking and Booking</h2> */}

          <div className="homeBtn">
            <a href="#">
              <button>Client</button>
            </a>

            <a href="#">
              <button>Admin</button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
