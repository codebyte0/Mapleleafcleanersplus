"use client";
import React from "react";
import {FeaturesSectionDemo} from "./Egcards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {Button} from "./ui/button";

const About = () => {
const openTalkToChat = (err) => {
  // Trigger Talk.to chat to open
  if (window && window.Tawk_API) {
    window.Tawk_API.maximize();  // This opens the chat widget
  }
  else{
    console.log(err);
  }
};
  return (
    <div className="bg-white w-full h-auto md:h-[90vh] overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto py-[7rem] ">
        <div className="flex flex-col md:flex-row w-full md:gap-0 gap-12">
          <div className="textpart1 px-[1rem] space-y-5 flex-1">
            <div className="md:max-w-[25rem] space-y-4">
              <button className="px-5 py-1 bg-gray-100 rounded-xl text-yellow-500 font-semibold">
                About Us
              </button>
              <h2 className="text-3xl">More than just a cleaning service</h2>
              <div className="boxes grid grid-cols-1 sm:grid-cols-2 gap-6">
               <FeaturesSectionDemo/>
              </div>
            </div>
          </div>

          <div className="textpart2 flex-1 flex items-center justify-center md:px-0 px-[1rem]">
            <div className="!w-full space-y-9">
              <p className="mt-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates minus eos eaque, itaque ullam commodi animi
                consectetur magni.
              </p>
              <div className="accordian-part">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 relative left-[2.1px] flex items-center justify-center gap-2" onClick={openTalkToChat}>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
