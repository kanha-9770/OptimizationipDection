"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { MessageBox } from "../ui/MessageBox";
import { cn } from "@/lib/utils";
import { useForm } from "@/app/[country]/[locale]/context/FormContext";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const SignupFormDemo = ({ formId }: { formId: string }) => {
  const { submitForm } = useForm(); // Access the context
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitForm({ ...formValues, formId }); // Include formId for uniqueness
      toast.success("Form submitted successfully!", {
        duration: 3000,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#4caf50",
          color: "#fff",
        },
      });
    } catch (error) {
      console.error("Failed to submit the form:", error);
      toast.error("Error submitting the form. Please try again.", {
        duration: 3000,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#e63946",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      {/* React Hot Toast Container */}
      <Toaster />
      <motion.div
        className="flex max-w-full mx-auto px-4 justify-center"
        initial={{ y: "-100%", height: 0, opacity: 0 }}
        animate={{ y: 0, height: "33rem", opacity: 1 }}
        exit={{ y: "-100%", height: 0, opacity: 0 }}
        transition={transition}
      >
        <div className="w-full max-w-md">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                  value={formValues.firstname}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  value={formValues.lastname}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="mobilenumber">Mobile Number</Label>
              <Input
                id="mobilenumber"
                placeholder="123-456-7890"
                type="tel"
                value={formValues.mobilenumber}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Your Message</Label>
              <MessageBox
                id="message"
                placeholder="Type your message here..."
                value={formValues.message}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

export default SignupFormDemo;
