"use client";
import React from "react";
import { motion } from "framer-motion";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { MessageBox } from "../ui/MessageBox";
import { cn } from "@/lib/utils";

const NewSignupFormDemo = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <motion.div className="flex h-[26rem] -mr-1 max-w-[80%] mx-auto rounded-none md:rounded-xl px-4 p-2 shadow-input bg-white dark:bg-black">
      <div className="w-full max-w-sm">
        <form className="my-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 mb-2">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-sm">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" className="h-8 text-sm px-2" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-sm">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" className="h-8 text-sm px-2" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-2">
            <Label htmlFor="email" className="text-sm">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" className="h-8 text-sm px-2" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-2">
            <Label htmlFor="mobilenumber" className="text-sm">Mobile Number</Label>
            <Input id="mobilenumber" placeholder="123-456-7890" type="tel" className="h-8 text-sm px-2" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message" className="text-sm">Your Message</Label>
            <MessageBox id="message" placeholder="Type your message here..." className="h-20 text-sm px-2" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative  bg-[#483d78] w-full text-white rounded-md h-8 text-sm font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-1 w-full", className)}>
      {children}
    </div>
  );
};

export { NewSignupFormDemo };
