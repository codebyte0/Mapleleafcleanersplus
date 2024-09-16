"use client";
import * as React from "react";
import RangeSlider from "./ui/Range";
import { FaLocationArrow } from "react-icons/fa";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "../components/radio-group";
import { IoIosArrowForward } from "react-icons/io";
import { TextField, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { format, setHours, setMinutes } from "date-fns"; // Import date-fns utilities
import { useState } from "react";
const Booking = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = useState(new Date().setHours(8, 0)); // Default to 8:00 AM
  const [open, setOpen] = React.useState(false);
  // minimum and maximum time limits (7 AM and 8 PM)
  const minTime = setHours(setMinutes(new Date(), 0), 7); // 7:00 AM
  const maxTime = setHours(setMinutes(new Date(), 0), 20); // 8:00 PM

  // Disable past dates and allow only dates 2 days in the future or later
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 2);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  // Function to validate the phone number
  const validatePhoneNumber = (phone) => {
    const phoneTrimmed = phone.replace(/\D/g, ""); // Remove non-digit characters
    if (phoneTrimmed.length < 7) {
      return "Phone number must be at least 7 digits long.";
    }
    return ""; // No error
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation for phone number
    if (name === "phoneNumber") {
      const errorMsg = validatePhoneNumber(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: errorMsg,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic required field validation
    let isValid = true;
    let newErrors = { ...errors };

    // Validate phone number
    const phoneError = validatePhoneNumber(formData.phoneNumber);
    if (phoneError) {
      isValid = false;
      newErrors.phoneNumber = phoneError;
    }

    // Validate other fields (e.g., fullName, address)
    if (!formData.fullName.trim()) {
      isValid = false;
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.address.trim()) {
      isValid = false;
      newErrors.address = "Address is required.";
    }

    setErrors(newErrors);

    if (isValid) {
      // Form is valid, handle submission logic here
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div id="booknow" className="h-auto max-w-6xl mx-auto md:px-[0.8rem] px-[2rem] py-[2.5rem] flex gap-[5rem] flex-col md:flex-row ">
      <div className="textpart flex-1 space-y-5 flex items-start justify-center flex-col">
        <h2 className="mx-auto text-4xl md:text-5xl font-bold text-neutral-800 ">
          Request a Free Cleaning Quote today!
        </h2>
        <p>
          Simply provide us with your Contact information along with your
          requirements, and we will get back to you usually within 24 hours.
        </p>
        <h3>Not Convinced yet?</h3>
        <button className="px-4 py-2 bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 relative left-[2.1px] flex items-center justify-center gap-2">
          <span>Explore Our Services </span>
          <FaLocationArrow />
        </button>
      </div>
      <div className="form flex-1 flex  items-center flex-col bg-[#ffed292a] shadow-2xl">
        <h3 className="mx-auto text-xl md:text-5xl font-bold text-neutral-800 my-4">
          Get a quote
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5 flex flex-col items-center w-full py-5 px-1 ">
          <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
            {/* Full Name */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">Full name</label>
              <input
                type="text"
                name="fullName"
                className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
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
              <label className="text-sm font-semibold mb-1">Phone number</label>
              <input
                type="text"
                name="phoneNumber"
                className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
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
          <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
            {/* Address */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">Address</label>
              <input
                type="text"
                name="address"
                className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && (
                <p className="text-red-600 text-sm">{errors.address}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">
                Email <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your email (optional)"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
            <div className="row flex w-full gap-3 flex-wrap md:flex-nowrap">
              {/* Requested Service */}
              {/* <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">
                Requested service
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Full cleaning"
              />
            </div> */}

              {/* Day of Service - Date Picker */}
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold mb-1">
                  Day of Service
                </label>
                <div className="relative">
                  {/* Date Input Field */}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedDate}
                      onChange={(newValue) => setSelectedDate(newValue)}
                      minDate={minSelectableDate} // Only allow selecting dates 2 days from now
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          fullWidth
                          label="Select Date"
                          slotProps={{
                            endAdornment: (
                              <IconButton onClick={() => setOpen(true)}>
                                <CalendarTodayIcon />
                              </IconButton>
                            ),
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>

            {/* Separate Time Picker */}
            <div className="row flex w-full gap-3 flex-wrap md:flex-nowrap">
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold mb-1">
                  Select Time
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    value={selectedTime}
                    onChange={(newValue) => setSelectedTime(newValue)}
                    renderInput={(props) => (
                      <TextField {...props} fullWidth label="Select Time" />
                    )}
                    minTime={minTime} // Set the minimum time to 7:00 AM
                    maxTime={maxTime} // Set the maximum time to 8:00 PM
                    views={["hours"]} // Only show hour selection (and implicitly AM/PM)
                    ampm={true} // Display AM/PM format
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <div className="self-start ml-12 flex-wrap items-center w-full flex">
            <RangeSlider />
          </div>

          {/* Submit Button */}
          <button className="px-4 py-2 bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 relative left-[2.1px] flex items-center justify-center gap-2 self-start ml-5">
            <span>Submit</span>
            <IoIosArrowForward />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
