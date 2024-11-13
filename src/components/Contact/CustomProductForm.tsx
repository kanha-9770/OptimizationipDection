"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import CountrySelect from "../ui/CountrySelect";
const products = [
  {
    id: 1,
    title: "Die Cutting Machines",
    description: "Raw Material fulfillment for paper cup machines",
    image:
      "https://www.nesscoindia.com/Assets/images/resource/flexo-printing-machine-nessco.webp",
  },
  {
    id: 2,
    title: "Flexo Printing Machines",
    description: "Raw Material fulfillment for paper cup machines",
    image:
      "https://www.nesscoindia.com/Assets/images/resource/paper-cutlery-making-machine.webp",
  },
  {
    id: 3,
    title: "Die Cutting Machines",
    description: "Raw Material fulfillment for paper cup machines",
    image:
      "https://www.nesscoindia.com/Assets/images/resource/paper-glass-machine.webp",
  },
];

const SignupFormDemoProduct = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="flex w-full lg:sticky lg:top-[6.4rem] h-full mx-auto justify-center font-poppins"
      animate={{ y: 0, height: "33rem", opacity: 1 }}
    >
      <div className="w-full lg:h-screen  h-max gap-2 flex flex-col ">
        {/* part-one-contact-page */}
        <form
          className="w-full lg:h-[29.2vh] bg-white p-4 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="flex px-1 flex-col md:flex-row  mb-2 ">
            <LabelInputContainer>
              <Input
                className="h-8 lg:mb-0 mb-2"
                id="name"
                placeholder="Enter Name"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-2 px-1">
            <Input
              className="h-8"
              id="email"
              placeholder="Enter Email"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-2">
            <CountrySelect isoCode={"in"} />
          </LabelInputContainer>
          <div className="w-full flex justify-center">
            <button
              className="bg-gradient-to-br h-8 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/3 text-white rounded-md  font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </div>
        </form>

        <div className="w-full flex  lg:h-[10vh] bg-white rounded-xl p-4 items-center font-poppins">
          <div className="w-[80%] flex flex-col items-start justify-center">
            <h2 className="font-semibold text-gray-700">
              <span className="text-gray-400">Download</span> Brochure
            </h2>
            <p className="text-black font-semibold text-sm">
              <span className="text-gray-700 font-regular">
                Nessco Paper Cup Machine{" "}
              </span>{" "}
              Catalogue
            </p>
          </div>
          <div className="w-[20%] font-poppins flex items-center justify-center">
            {/* < className="text-3xl font-black text-black " /> */}
          </div>
        </div>
        {/* second-part-of right side */}
        <div className="h-[41vh] bg-white p-4 font-regular rounded-xl hidden lg:block">
          <h2 className="font-semibold text-gray-700 mb-2">
            <span className="text-gray-400">Related</span> Products
          </h2>

          <div
            id="scrollbar1"
            className={`w-full space-y-2 flex flex-col  transition-all duration-300 ease-in-out ${
              expanded
                ? "h-[30vh] overflow-auto scrollbar-product-description "
                : "h-[30vh] overflow-hidden"
            }`}
          >
            <div className="p-4 w-full max-w-md">
              {products
                .slice(0, expanded ? products.length : 3)
                .map((product) => (
                  <div
                    key={product.id}
                    className="flex border-b-[2px] items-start mb-4"
                  >
                    {/* Product Image */}
                    <div className="w-16 h-16 rounded-md overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold text-sm">{product.title}</h3>
                      <p className="text-xs text-gray-600">
                        {product.description}
                      </p>
                    </div>

                    {/* Action Menu Icon */}
                    <div className="ml-2">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 110-1.5h.008a.75.75 0 010 1.5h-.008zm6 0a.75.75 0 110-1.5h.008a.75.75 0 010 1.5h-.008zm6 0a.75.75 0 110-1.5h.008a.75.75 0 010 1.5h-.008z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Show More / Show Less Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className=" p-1 rounded-full -mt-4 bg-gray-200 hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 text-gray-500 transform transition-transform ${
                  expanded ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#483d73] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#483d73] to-transparent" />
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export { SignupFormDemoProduct };
