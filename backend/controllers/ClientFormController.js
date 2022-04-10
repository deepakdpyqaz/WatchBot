const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const Client =require("../models/ClientFormModel");
const sendToken = require("../utils/jwtToken");
// const sendEmail = require('../utils/sendEmail');



exports.getclientDetails = catchAsyncErrors(async(req,res,next)=>{
    const client =await Client.findById(req.params.id);
    
    res.status(200).json({
        success:true,
        client
    });
});

// -------------- Register User (Client) ---------------

exports.registerClient=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,location,openingTime,closingTime,TypeOfVehicles,LicensePlateNumber}=req.body;
    const client=await Client.create({
        name,
        email,
        location,
        openingTime,
        closingTime,
        TypeOfVehicles,
        LicensePlateNumber
    });

    sendToken(client,201,res);
});
