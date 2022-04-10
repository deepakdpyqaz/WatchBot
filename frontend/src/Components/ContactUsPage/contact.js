import React,{Fragment, fragment} from "react";
import "./contact.css";

const Contact= () => {
    return (
        <Fragment>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
        <h1 className="section-header">Contact US</h1>

        <div className="contact-wrapper">
        
        <div className ="left-Text-canatiner">
          left side content 
          
        </div>
          
          
            <div className="direct-contact-container">
      
              <ul className="contact-list">
                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">XXXXXxxxxxx</span></i></li>
                
                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">XXXXXXXXXXXXXX</a></span></i></li>
                
                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">XXXXXXXXXXXXXXX</a></span></i></li>
                
              </ul>
              <ul className="social-media-list">
                <li><a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li><a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-youtube" aria-hidden="true"></i></a>
                </li>
                <li><a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li><a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i></a>
                </li>       
              </ul>
      
            </div>
          
        </div>
        </Fragment>
        
    );
  }
  
  export default Contact ;