const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModels");
const sendToken = require("../utils/jwtToken");
const sendEmail = require('../utils/sendEmail');
const crypto = require("crypto");
const Client = require("../models/ClientFormModel");

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    });
});

// -------------- Register User (Premise) ---------------

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, PremiseDetails } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        PremiseDetails
    });

    sendToken(user, 201, res);
});

// -------------- SignUp User ------------

exports.signUpUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    //checking if user given password and email both
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user= await User.findOne({email}).select("+password");
    const name = "null||none";
    if(user){
        return next(new ErrorHandler("Email Already Registred",401));
    }
    const usr = await User.create({
        email,
        password,
        name
    });;

    sendToken(usr, 200, res);

})
// -------------- Login User ------------

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    //checking if user given password and email both
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    sendToken(user, 200, res);

})

// -------------- Logout User ---------------

exports.logout = catchAsyncErrors(async (req, res, next) => {

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
})


// ------------- Forgot Password -----------------

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    //Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore it.`;

    try {
        await sendEmail({
            email:user.email,
            subject:`WatchBot Password Recovery`,
            message,
        });
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
})

// ------------ Reset Password ------------

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.Token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    })

    if (!user) {
        return next(new ErrorHandler("Reset Password token is invalid or has been expired", 400));
    }

    if (req.body.password != req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res);
});


// ----------- Update User password ------------

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old Password is incorrect", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
});

// ---------- Update User Profile ----------

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }
    // we will add Cloudinary later

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, { new: true, runValidators: true, useFindAndModify: false });

    res.status(200).json({
        succes: true,
    })
})
