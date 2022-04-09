// ------------ Client Model ------------

const mongoose=require ("mongoose");
const validator=require("validator");
// const bcrypt= require("bcryptjs");
const jwt=require("jsonwebtoken");
// const crypto=require("crypto");

const clientFormSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxlength:[30,"Cannot exceed 30 Characters"],
        minlength:[4,"Name should not exceed 4 Characters"],
    },
    location:{
        type:String,
        default:"NULL",
        required:true,
    },
    openingTime:{
        type: Date,
    },
    closingTime:{
        type: Date,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
    TypeOfVehicles:{
        type:String,
    },
    LicensePlateNumber:[{
        NumberPlate:{
            type:String,
        }
    }],
});


// JWT TOKEN
userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    });
}; 

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword ){
    return await bcrypt.compare(enteredPassword,this.password)
}

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function(){
    //  Generating Token 
    const resetToken = crypto.randomBytes(20).toString("hex");

    //  Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15*60*1000;

    return  resetToken;
}


module.exports=mongoose.model("User",userSchema);

