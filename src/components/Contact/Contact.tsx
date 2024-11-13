import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { FormProvider } from "@/app/[country]/[locale]/context/FormContext";

const SignupFormDemo = dynamic(() => import("./SignupFormDemo"));

interface ContactFormProps {
  isContactFormVisible: boolean;
  setContactFormVisible: (visible: boolean) => void;
  setIsFlagOpen: (flag: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isContactFormVisible,
  setContactFormVisible,
  setIsFlagOpen,
}) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    setContactFormVisible(true);
    setIsFlagOpen(false);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (
      contactRef.current &&
      !contactRef.current.contains(event.relatedTarget as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.relatedTarget as Node)
    ) {
      setContactFormVisible(false);
    }
  };

  useEffect(() => {
    const contactElement = contactRef.current;
    const buttonElement = buttonRef.current;

    const handleMouseLeaveNative = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.relatedTarget as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.relatedTarget as Node)
      ) {
        setContactFormVisible(false);
      }
    };

    contactElement?.addEventListener("mouseleave", handleMouseLeaveNative);
    buttonElement?.addEventListener("mouseleave", handleMouseLeaveNative);

    return () => {
      contactElement?.removeEventListener("mouseleave", handleMouseLeaveNative);
      buttonElement?.removeEventListener("mouseleave", handleMouseLeaveNative);
    };
  }, []);

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <FormProvider>
      <div>
        <Button
          ref={buttonRef}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          onMouseEnter={handleMouseEnter}
        >
          Enquire
        </Button>
        <AnimatePresence>
          {isContactFormVisible && (
            <motion.div
              ref={contactRef}
              className="fixed top-12 rounded-xl right-0 z-[99999] mr-8 mt-0 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] bg-white overflow-hidden"
              initial={{ y: "-100%", height: 0, opacity: 0 }}
              animate={{ y: 0, height: "35rem", opacity: 1 }}
              exit={{ y: "-100%", height: 0, opacity: 0 }}
              transition={transition}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex justify-between items-center p-4">
                <h2 className="font-montserrat text-xl text-neutral-800 dark:text-neutral-200">
                  GET IN TOUCH WITH US
                </h2>
                <button
                  onClick={() => setContactFormVisible(false)}
                  aria-label="Close contact form"
                  className="text-gray-600 hover:text-gray-800"
                >
                  X
                </button>
              </div>

              {/* Signup Form with Context */}
              <SignupFormDemo formId="HomePage/Enquire"/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FormProvider>
  );
};

export default ContactForm;
