import React, { useState } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Textarea } from "./textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import emailjs from "emailjs-com";
import { useToast } from "../../hooks/use-toast";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
export function DialogDemo({
  open,
  onClose,
  formValues,
  setShowPopup,
  setFormData,
}) {
  const [selectedOption, setSelectedOption] = useState("Yes");
  const [productPreferences, setProductPreferences] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for sending
    const date = formValues.selectedDate
      ? formValues.selectedDate.toLocaleDateString() // Format date to local date string
      : "Not specified";

    const time = formValues.selectedTime
      ? formValues.selectedTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }) // Format time to local time string
      : "Not specified";

    console.log("Selected Date:", formValues.selectedDate);
    console.log("Selected Time:", formValues.selectedDate);

    const formData = {
      selectedOption: selectedOption,
      productPreferences: productPreferences,
      fullName: formValues.fullName,
      phoneNumber: formValues.phoneNumber,
      address: formValues.address,
      email: formValues.email,
      houseSize: `${formValues.houseSize[0]} sq.ft - ${formValues.houseSize[1]} sq.ft`, // Send slider value
      date: date, // Format date or default
      time: time, // Format time or default
    };

    // Send form data using EmailJS
    emailjs
      .send(
        "service_ppa6p2v",
        "template_nak7pks",
        formData,
        "YUfYkQIlu3D674JQr"
      )
      .then((response) => {
        console.log("Form submitted successfully:", response);
        onClose(); // Close the dialog after successful submission
        setShowPopup(false); // Correct usage of setShowPopup
        toast({
          title: "Thank you!",
          description: `${formData.fullName}, Your appointment has been scheduled for ${formData.date} at ${formData.time}. We will be in touch with you shortly.`,
        });
        // Reset form data after submission
        setFormData({
          fullName: "",
          phoneNumber: "",
          address: "",
          email: "",
          houseSize: [1000, 5000],
          selectedDate: null, // Reset date
          selectedTime: new Date().setHours(8, 0), // Reset time
        });
      })
      .catch((err) => {
        // console.error("Error sending form:", err);
        toast({
          title: "Error",
          description:
            "There was an issue submitting your form. Please try again.",
        });
      });
    setisSubmitting(true);
  };

  const openTalkToChat = () => {
    if (window && window.Tawk_API) {
      window.Tawk_API.maximize(); // Open the chat widget
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-800 mb-4">
            Almost Done!
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-4">
            Please provide a few more details to complete your booking.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Select for Yes/No */}
          <span className="text-gray">
            {" "}
            Do you have all the Cleaning products?
          </span>
          <Select value={selectedOption} onValueChange={setSelectedOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Yes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>

          {/* Textarea for product preferences */}
          <div className="text-xs">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex items-center justify-between">
                {/* Trigger for Collapsing */}
                <CollapsibleTrigger asChild>
                  <button className="flex items-center">
                    <span className="text-sm">Required Products</span>
                    <span className="ml-2">
                      {isOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  </button>
                </CollapsibleTrigger>
              </div>

              {/* Collapsible content */}
              <CollapsibleContent>
                <p className="mt-2">
                  Windex, paper towel, rags, soap for the shower and toilet,
                  stainless steel cleanser, degreaser for the kitchen, sponge
                  and brush for the floor of the bath, and all-purpose cleaner.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div>
            <label
              htmlFor="product-preferences"
              className="block text-gray-700 mb-1"
            >
              If not, Please contact us and which products would you like the
              cleaner to bring?
            </label>
            <Textarea
              id="product-preferences"
              value={productPreferences}
              onChange={(e) => setProductPreferences(e.target.value)}
              placeholder="List any specific products or preferences"
              rows={1}
              className="w-full border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div>
            {/* Collapsible for Pricing */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-2">
                <span className="font-semibold">Pricing:</span>
                <MdKeyboardArrowDown />
              </CollapsibleTrigger>
              <CollapsibleContent className="text-gray-700">
                Rates are $35 per hour. The minimum appointment
                duration is 3 hours.Please
                contact us to discuss your preferred appointment length;
                however, a 3-hour minimum applies by default.
              </CollapsibleContent>
            </Collapsible>
            {/* Collapsible for Note */}
            <Collapsible className="mt-2">
              <CollapsibleTrigger className="flex items-center gap-2">
                <span className="font-semibold">Note:</span>
                <MdKeyboardArrowDown />
              </CollapsibleTrigger>
              <CollapsibleContent className="text-gray-700">
                You will receive a verification call from the cleaner upon
                arrival and a reminder call one day before the appointment.
              </CollapsibleContent>
            </Collapsible>
          </div>
          <span className="text-sm underline">
            If our rates doesn't align with your budget, please contact us and
            we will try our best to minimize costs while meeting your needs.
          </span>
          <span
            className="text-yellow-700 cursor-pointer"
            onClick={openTalkToChat}
          >
            {" "}
            Need Discount?
          </span>
        </div>

        <DialogFooter className="flex mt-6 space-x-2 w-full self-stretch items-stretch">
          <div className="flex">
            <Button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="submitbutton px-4 py-2 bg-yellow-400 hover:bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 relative left-[2.1px] flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
