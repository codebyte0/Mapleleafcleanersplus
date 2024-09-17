// "use client"
// import * as React from "react"
// import { useState } from "react"
// import { Button } from "../components/ui/button"
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "../components/ui/drawer"
// import { FaLocationArrow } from "react-icons/fa"


// const [formData, setFormData] = useState({
//   fullName: "",
//   phoneNumber: "",
//   address: "",
//   email: "",
// });

// const [errors, setErrors] = useState({
//   fullName: "",
//   phoneNumber: "",
//   address: "",
//   email: "",
// });
// const handleInputChange = (e: { target: { name: any; value: any } }) => {
//   const { name, value } = e.target;
//   setFormData({
//     ...formData,
//     [name]: value,
//   });

// };

// const handleSubmit = (e: { preventDefault: () => void }) => {
//   e.preventDefault();
//   // Basic required field validation
//   let isValid = true;
//   let newErrors = { ...errors };

//   // Validate other fields (e.g., fullName, address)
//   if (!formData.fullName.trim()) {
//     isValid = false;
//     newErrors.fullName = "Full name is required.";
//   }
//   if (!formData.address.trim()) {
//     isValid = false;
//     newErrors.address = "Address is required.";
//   }

//   setErrors(newErrors);

//   if (isValid) {
//     // Form is valid, handle submission logic here
//     console.log("Form submitted successfully:", formData);
//   }
// };

// export function DrawerDemo() {
//   const [goal, setGoal] = React.useState(350)

//   function onClick(adjustment: number) {
//     setGoal(Math.max(200, Math.min(400, goal + adjustment)))
//   }

//   return (
//     <Drawer>
//       <DrawerTrigger asChild>
//         <button className="px-4 py-2 bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 relative left-[2.1px] flex items-center justify-center gap-2">
//           <span>Contact </span><FaLocationArrow />
//         </button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <div className="mx-auto w-full max-w-sm">
//           <DrawerHeader>
//             <DrawerTitle>Move Goal</DrawerTitle>
//             <DrawerDescription>Set your daily activity goal.</DrawerDescription>
//           </DrawerHeader>
//           <form onSubmit={handleSubmit} className="space-y-5 flex flex-col items-center w-full py-5 px-1 ">
//             <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
//               {/* Full Name */}
//               <div className="flex flex-col w-full">
//                 <label className="text-sm font-semibold mb-1">Full name</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
//                   placeholder="Enter your full name"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 {errors.fullName && (
//                   <p className="text-red-600 text-sm">{errors.fullName}</p>
//                 )}
//               </div>

//               {/* Phone Number */}
//               <div className="flex flex-col w-full">
//                 <label className="text-sm font-semibold mb-1">Phone number</label>
//                 <input
//                   type="text"
//                   name="phoneNumber"
//                   className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
//                   placeholder="Enter your phone number"
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 {errors.phoneNumber && (
//                   <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
//                 )}
//               </div>
//             </div>
//             <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
//               {/* Address */}
//               <div className="flex flex-col w-full">
//                 <label className="text-sm font-semibold mb-1">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
//                   placeholder="Enter your address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 {errors.address && (
//                   <p className="text-red-600 text-sm">{errors.address}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div className="flex flex-col w-full">
//                 <label className="text-sm font-semibold mb-1">
//                   Email <span className="text-gray-500 text-xs">(optional)</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
//                   placeholder="Enter your email (optional)"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
//               <div className="row flex w-full gap-3 flex-wrap md:flex-nowrap">
//                 {/* Requested Service */}
//                 <div className="flex flex-col w-full">
//               <label className="text-sm font-semibold mb-1">
//                 Requested service
//               </label>
//               <input
//                 type="text"
//                 className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
//                 placeholder="Full cleaning"
//               />
//             </div>
//               </div>
//             </div>              
//           </form>
//           <DrawerFooter>
//             <Button>Submit</Button>
//             <DrawerClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </DrawerClose>
//           </DrawerFooter>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   )
// }
