import React, { Fragment, useState } from "react";
import "./client.css"
function Client() {
    const [name, setName] = useState("");
    const [license, setLicence] = useState("");
    const [arrival_time, setArrival_time] = useState("");
    const [exit_time, setExit_time] = useState("");
    const [destination, setDestination] = useState("");

    return (
        <Fragment>
            <div id="body">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                    crossorigin="anonymous"></link>
                <h1 className="section-header">Parking Booking</h1>

                <div className="contact-wrapper">

                    <div className="left-Text-canatiner">

                    </div>


                    <div className="direct-contact-container">

                        <form id="contact-form" class="form-horizontal" role="form">
                            <div class="form-group">
                                <div class="col-sm-20">
                                    <input type="text" class="form-control" id="name" placeholder="Name" name="name" value={name}
                                        onChange={(e) => setName(e.target.value)} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    <input type="text" class="form-control" id="License_Plate_No" placeholder="License Plate No" name="License_Plate_No" value={license}
                                        onChange={(e) => setLicence(e.target.value)} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    <label class = "label">Enter Arrival Time</label>
                                    <input type="datetime-local" class="form-control" id="arrival_time" placeholder="Arrival Time" name="arrival_time" value={arrival_time}
                                        onChange={(e) => setArrival_time(e.target.value)} required />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-20">
                                    <label class = "label" >Enter Expected Departure Time</label>
                                    <input type="datetime-local" class="form-control" id="expected_exit_time" placeholder="Expected Exit Time" name="exit_time" value={exit_time}
                                        onChange={(e) => setExit_time(e.target.value)} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-20">
                                    
                                    <input type="text" class="form-control" id="destination" placeholder="Destination" name="destination" value={destination}
                                        onChange={(e) => setDestination(e.target.value)} required />
                                </div>
                            </div>
                            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                                <div class="alt-send-button">
                                    <i class="fa fa-paper-plane"></i>
                                </div>

                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </Fragment>

    )
}

export default Client;
