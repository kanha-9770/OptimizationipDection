import React from "react";
import SpecificationTable from "./SpecificationTable";
import Image from "next/image";
import bowl from "../../../public/assets/product/PaperBowl.png";
export function TechnicalSpecifications() {
  return (
    <div className="w-full h-full flex flex-row font-poppins">
      {/* Left Side: Specification and Image */}
      <div className="flex-grow bg-white p-8 rounded-2xl flex flex-col justify-between">
        <div className="mb-6">
          <h1 className="font-poppins text-3xl font-medium text-[#483d73]">
            Technical
            <span className="text-red-700 font-semibold ml-2 text-3xl">
              Specifications
            </span>
          </h1>
        </div>
        <div className=" flex flex-row items-center justify-center space-x-4">
          <SpecificationTable />
          <div className="w-[50%] h-full flex items-center justify-center">
            <Image
              src={bowl}
              width={400}
              height={400}
              alt="Specification Glass"
              className="w-full h-max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
