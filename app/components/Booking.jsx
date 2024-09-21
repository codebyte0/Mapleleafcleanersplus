"use client";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { IconButton, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { setHours, setMinutes } from "date-fns";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { DialogDemo } from "./ui/Confirmpopup";
import RangeSlider from "./ui/Range";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useToast } from "../hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    houseSize: [1000, 5000],
    selectedDate: null,
    selectedTime: null, // Initialize selectedTime as a Date object
  });
  const { toast } = useToast();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imgVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const minTime = setHours(setMinutes(new Date(), 0), 7); // 7:00 AM
  const maxTime = setHours(setMinutes(new Date(), 0), 20); // 8:00 PM
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 2); // Minimum selectable date is 2 days from now

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phoneNumber") {
      const phoneError = validatePhoneNumber(value);
      setErrors({ ...errors, phoneNumber: phoneError });
    }
  };

  const handleSliderChange = (event, newValue) => {
    setFormData((prevData) => ({ ...prevData, houseSize: newValue }));
  };

  const validatePhoneNumber = (phone) => {
    const phoneTrimmed = phone.replace(/\D/g, "");
    return phoneTrimmed.length < 7
      ? "Phone number must be at least 7 digits long."
      : "";
  };

  const handleTimeChange = (newTime) => {
    if (newTime && formData.selectedDate) {
      // Set minutes to 0
      const updatedTime = new Date(formData.selectedDate);
      updatedTime.setHours(newTime.getHours(), 0); // Always set minutes to 0
      setFormData({ ...formData, selectedTime: updatedTime });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = {};

    // Phone validation
    const phoneError = validatePhoneNumber(formData.phoneNumber);
    if (phoneError) {
      isValid = false;
      newErrors.phoneNumber = phoneError;
    }

    // Validate required fields
    if (!formData.fullName.trim()) {
      isValid = false;
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.address.trim()) {
      isValid = false;
      newErrors.address = "Address is required.";
    }
    if (!formData.selectedDate) {
      isValid = false;
      newErrors.date = "Please select a date.";
    }
    if (!formData.selectedTime) {
      isValid = false;
      newErrors.time = "Please select a time.";
    }

    setErrors(newErrors);

    if (isValid) {
      setShowPopup(true);
      console.log("Form submitted successfully:", formData);
    }
  };
  const openTalkToChat = () => {
    if (window && window.Tawk_API) {
      try{
        window.Tawk_API.maximize(); // This opens the chat widget
      }
      catch(err){
        toast({
          title: "Please Check your Internet connection and try again",
          // description: `${formData.fullName}, Your appointment has been scheduled for ${formData.date} at ${formData.time}. We will be in touch with you shortly.`,
        });
      }
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div
      ref={sectionRef}
      id="booknow"
      className="h-auto max-w-6xl mx-auto xl:px-[0.8rem] lg:px-[3rem] px-[2.5rem] py-[2.5rem] flex gap-[5rem] flex-col md:flex-row"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger only when in view
        variants={textVariant}
        className="textpart flex-1 space-y-5 flex items-start justify-center flex-col"
      >
        <h2 className="mx-auto text-4xl md:text-5xl font-bold text-neutral-800">
          Request a Free Cleaning Quote today!
        </h2>
        <p>
          Simply provide us with your contact information along with your
          requirements, and we will get back to you within 24 hours.
        </p>
        <h3>Not convinced yet?</h3>
        <button
          onClick={openTalkToChat}
          className="px-4 py-2 bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 flex items-center justify-center gap-2"
        >
          <span>Contact</span>
          <FaLocationArrow />
        </button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger only when in view
        variants={imgVariant}
        className="form flex-1 flex items-center flex-col bg-[#ffed292a] shadow-2xl"
      >
        <h3 className="mx-auto text-xl md:text-5xl font-bold text-neutral-800 my-4">
          Get a quote
        </h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col items-center w-full py-5 px-1"
        >
          <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
            {/* Full Name */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              {errors.phoneNumber && (
                <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          {/* Address and Email */}
          <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">Address</label>
              <input
                type="text"
                name="address"
                className="border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && (
                <p className="text-red-600 text-sm">{errors.address}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">
                Email <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                className="border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your email (optional)"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Date and Time */}
          <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">
                Day of Service
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={formData.selectedDate}
                  onChange={(newValue) =>
                    setFormData({ ...formData, selectedDate: newValue })
                  }
                  minDate={minSelectableDate}
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      fullWidth
                      label="Select Date"
                      slotProps={{
                        endAdornment: (
                          <IconButton>
                            <CalendarTodayIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">
                Time of Service
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  value={formData.selectedTime}
                  onChange={handleTimeChange}
                  minTime={minTime}
                  maxTime={maxTime}
                  views={["hours"]} // Restrict to hours only
                  renderInput={(params) => (
                    <TextField {...params} fullWidth label="Select Time" />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>

          {/* House Size Slider */}
          <RangeSlider
            value={formData.houseSize}
            handleChange={handleSliderChange}
          />

          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </motion.div>

      {showPopup && (
        <DialogDemo
          open={showPopup}
          onClose={handlePopupClose}
          formValues={formData}
          setShowPopup={setShowPopup}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default Booking;
