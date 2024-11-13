"use client";
import React from "react";
import dynamic from "next/dynamic";
const LottieAnimation=dynamic(()=>import("../ui/LottieAnimation"))
import speed from "../../../public/assets/product/speed.json";
import size from "../../../public/assets/product/size.json";
import { Machine } from "./types/constant";

interface ProductDescriptionProps {
  machine:Machine;
}
const ProductDescription: React.FC<ProductDescriptionProps> = ({ machine }) => {
  return (
    <div className="h-full lg:-mt-0 -mt-40 bg-white rounded-xl font-poppins">
      <div className="h-full p-8 rounded-xl flex flex-col">
        {/* heading */}
        <div className="w-full h-auto justify-start mb-2">
          <span className="text-[#483d73] font-medium lg:text-3xl text-2xl">
            {machine?.descriptionHeading}
          </span>
          <span className="text-red-700 ml-2 font-semibold lg:text-3xl text-2xl">
            {machine?.descriptionSubHeading}
          </span>
          <div className="text-sm text-black font-poppins mt-4">
            {machine.product_description}
          </div>
        </div>
        <div className="relative items-center p-4  flex flex-row justify-center">
          <div className="lg:h-48 h-40 flex flex-col w-64">
            <LottieAnimation
              className="lg:h-20 lg:w-20 h-16 w-16"
              animationData={speed}
            />
            <p className="text-[#483d78] text-center lg:text-2xl text-lg">
              Speed
            </p>
            <p className="lg:text-base text-xs justify-center px-6 lg:mt-8 mt-2 text-center font-regular">
              {machine.technicalSpecifications.specifications[0]}
            </p>
          </div>
          <div className="lg:h-48 h-40 w-64 flex flex-col border-l-2 border-gray-300 border-r-2">
            <LottieAnimation
              className="lg:h-20 lg:w-20 h-16 w-16 -rotate-45"
              animationData={size}
            />
            <p className="text-[#483d78] text-center lg:text-2xl text-lg">
              Size
            </p>
            <p className="lg:text-base text-xs lg:mt-8 mt-2 px-6 text-center font-regular">
              {machine.technicalSpecifications.specifications[1]}
            </p>
          </div>
          <div className="lg:h-48 h-40 w-64 flex flex-col ">
            <LottieAnimation
              className="lg:h-20 lg:w-20 h-16 w-16"
              animationData={speed}
            />
            <p className="text-[#483d78] text-center lg:text-2xl text-lg">
              Range
            </p>
            <p className="lg:text-base text-xs lg:mt-8 mt-2 px-6 text-center font-regular">
              {machine.technicalSpecifications.specifications[2]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
