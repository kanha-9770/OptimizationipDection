"use client";

import React from "react";
import Image from "next/image";
import "./machine.css";
interface Rating {
  stars: number; // Changed to number
  reviews: number;
}

interface TechnicalSpecifications {
  title: string;
  specifications: string[];
}

interface Advantages {
  title: string;
  items: string[];
}

interface PaperTypes {
  title: string;
  types: Array<{
    type: string;
    image: string;
  }>;
}

interface RightSidebarProps {
  title: string;
  first_name: string;
  second_name: string;
  status: string;
  rating: Rating;
  technicalSpecifications: TechnicalSpecifications;
  advantages: Advantages;
  paperTypes: PaperTypes;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  first_name,
  second_name,
  status,
  rating,
  technicalSpecifications,
  advantages,
  paperTypes,
}) => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const maxStars = 5; // Total number of stars
    const filledStars = Math.round(rating); // Round the rating to the nearest integer
    const starsArray = Array.from({ length: maxStars }, (_, index) =>
      index < filledStars ? "★" : "☆"
    );
    return starsArray.join(""); // Join stars with a space for separation
  };

  // Function to render text with bold part before the colon
  const renderTextWithBoldColon = (text: string) => {
    // Split text by the first colon
    const parts = text.split(/:(.+)/);
    if (parts.length > 1) {
      return (
        <>
          <span className="font-medium text-black">{parts[0]}:</span>
          <span>{parts[1]}</span>
        </>
      );
    }
    return text; // If no colon is present, return the text as is
  };

  return (
    <div className="bg-white font-poppins  h-[83vh] rounded-lg p-6 w-full">
      {/* Product Title */}
      <div className="mb-4 flex flex-row justify-between">
        <div>
          <span className="text-[#483d73] text-3xl font-medium">
            {first_name}
          </span>
          <h2 className="text-red-700 text-3xl font-medium leading-tight">
            {second_name}
          </h2>
        </div>
        <div className="rounded-full h-8 flex items-center justify-center text-center blinking-bg w-16">
          {status}
        </div>
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center mb-1">
        <div className="flex items-center space-x-1">
          <span className="text-xl">{renderStars(rating.stars)}</span>{" "}
          {/* Dynamic stars */}
          <span className="text-sm">({rating.reviews})</span>
        </div>
      </div>

      {/* Technical Specifications */}
      <div id="scrollbar1" className="scrollbar">
        <div className="dirchange">
          <div className="text-gray-600 mb-4 font-poppins font-regular text-base">
            <h3 className="font-bold mb-1">{technicalSpecifications.title}</h3>
            <ul className="list-disc text-sm text-start list-inside">
              {technicalSpecifications.specifications.map((spec, index) => (
                <li key={index}>{renderTextWithBoldColon(spec)}</li>
              ))}
            </ul>
          </div>
          {/* Advantages */}
          <div className="text-gray-600 mb-4">
            <h3 className="font-bold mb-1">{advantages.title}</h3>
            <ul className="list-disc text-sm font-regular list-inside">
              {advantages.items.map((advantage, index) => (
                <li key={index}>{renderTextWithBoldColon(advantage)}</li>
              ))}
            </ul>
          </div>

          {/* Paper Types */}
          <h3 className="font-bold mb-4">{paperTypes.title}</h3>
          <div className="flex space-x-4 mb-8">
            {paperTypes.types.map((paperType, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="border-2  p-2 rounded-lg">
                  <Image
                    src={paperType.image}
                    alt={paperType.type}
                    width={48}
                    height={48}
                    className="h-24 w-28"
                  />
                </div>
                <span className="text-sm mt-1">{paperType.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
