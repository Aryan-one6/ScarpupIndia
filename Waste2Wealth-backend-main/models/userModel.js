const mongoose = require("mongoose");

//Booking Schama For User Every new booking
const bookingSchema = new mongoose.Schema(
  {
    booking_id: {
      type: Number,
      required: true,
    },
    name:{
      type:String,
      required:true,
      default:"Saurabh Kumar",
    },
    phone:{
        type: Number,
      required: true,
      default:7261854534,
    },
    otp: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
      default:"Gharuan, Kharar SAS Nagar Mohali Punjab India",
    },
    date: {
      type: Date,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    picked: {
      type: Boolean,
      required: true,
    },
    vendor: {
      type: String,
    },
    vendor_id: {
      type: Number,
    },
    verify:{
      type:Boolean,
      required:true
    }
  },
  // { collation: "user_data"}
);

//User Schema for First time
const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
    bookings: [bookingSchema],
  },
  // { colletion: "user_data" }
);

const formSchema = new mongoose.Schema({
  _id:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  phone:{
    required:true,
    unique:true,
    type:String
  },
  message:{
    type:String,
    required:true
  }
});

//Order Schema for After OTP verification Done
const orderSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "ID Must be required"],
    },
    booking_id: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  // { colletion: "user_order" }
);

const FormModel = mongoose.model("Enquiery Form",formSchema);
const UserModel = mongoose.model("User", userSchema);
const BookingModel = mongoose.model("Booking", bookingSchema); 
const OrderModel = mongoose.model("Order", orderSchema);

module.exports = { UserModel, BookingModel, OrderModel, FormModel };
