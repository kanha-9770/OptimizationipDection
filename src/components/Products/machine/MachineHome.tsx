"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./machine.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
import BreadcrumbProduct from "@/components/ui/BreadCrumbProduct";
import InfoCard from "@/components/Products/InfoCard";
import ZigzagLine from "../ZigzagLine";
import { motion } from "framer-motion";

interface SpecificationImage {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
  fifth?: string;
}

interface Rating {
  stars: number;
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
  types: {
    type: string;
    image: string;
  }[];
}

interface LottieAnimations {
  speed: string;
  size: string;
}

interface ProductDetails {
  speedDescription: string;
  sizeDescription: string;
  rangeDescription: string;
}

interface MachineProps {
  name: string;
  image: string;
  mimage: string;
  description: string;
  specification_image: SpecificationImage[];
  product_heading: string;
  first_name: string;
  second_name: string;
  category: string;
  icon: string;
  introduction: string;
  parameters: string;
  application: string;
  product_description: string;
  status: string;
  rating: Rating;
  technicalSpecifications: TechnicalSpecifications;
  advantages: Advantages;
  paperTypes: PaperTypes;
  optional_add_ons: string;
  faqs: string;
  related_product: string;
  lottieAnimations: LottieAnimations;
  productDetails: ProductDetails;
}

const Machine: React.FC<MachineProps> = ({
  name,
  image,
  introduction,
  mimage,
  first_name,
  specification_image,
  advantages,
}) => {
  const titleRef = useRef(null);
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]); // Array to store refs for each <li>
  const smallImageRef = useRef(null);
  const [fontSize, setFontSize] = useState("16px");

  useEffect(() => {
    const calculateFontSize = () => {
      const charCount = introduction.length;
      // Base font size for the initial state
      let newFontSize = "1rem";

      // Dynamically adjust font size based on character length
      if (charCount < 50) {
        newFontSize = "2rem"; // Larger font size for shorter text
      } else if (charCount < 100) {
        newFontSize = "1.5rem"; // Medium font size
      } else if (charCount < 200) {
        newFontSize = "1rem"; // Smaller font size
      } else {
        newFontSize = "0.7rem"; // Very small for long text
      }

      setFontSize(newFontSize);
    };

    calculateFontSize();
  }, [introduction]); // Recalculate font size when introduction changes

  useEffect(() => {
    const tl = gsap.timeline();

    // Step 1: Animate the title with a typewriter effect
    tl.fromTo(
      titleRef.current,
      { text: "" },
      {
        text: advantages.title,
        duration: 0.2,
        ease: "power2.out",
        delay: 1.5, // Delay before starting the title animation
      }
    );

    // Step 2: Animate each <li> item sequentially after the title animation completes
    advantages.items.forEach((item, index) => {
      tl.fromTo(
        listItemRefs.current[index],
        { opacity: 0, text: "", "--dot-opacity": 0 }, // Start with both text and dot hidden
        {
          opacity: 1,
          text: item, // Use each item's text
          duration: 0.2,
          ease: "power2.out",
          onStart: () => {
            listItemRefs.current[index]?.style.setProperty(
              "--dot-opacity",
              "1"
            );
          },
        },
        "+=0.2" // Delay each <li> animation start after the previous one
      );
    });
  }, [advantages]);

  useEffect(() => {
    // GSAP scale-up animation with a delay
    gsap.fromTo(
      smallImageRef.current,
      { scale: 0.8 }, // Start with scale 0 (invisible)
      {
        scale: 1, // Scale up to full size
        duration: 0.5, // Duration of the scale-up effect
        ease: "power2.out", // Smooth easing
        delay: 1, // Delay before animation starts
      }
    );
  }, []);

  // Function to render text with bold part before the colon
  const renderTextWithBoldColon = (text: string) => {
    // Split text by the first colon
    const parts = text.split(/:(.+)/);
    if (parts.length > 1) {
      return (
        <>
          <span className="font-medium  text-black">{parts[0]}:</span>
          <span className="text-gray-500 font-regular">{parts[1]}</span>
        </>
      );
    }
    return text; // If no colon is present, return the text as is
  };
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>(image);
  useEffect(() => {
    checkScrollability();
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };
  console.log("images", specification_image);

  const images = specification_image.flatMap((img) => Object.values(img)); // Flattening the images array
  const shouldShowArrows = images.length > 4;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: name, current: true },
  ];

  return (
    <div className="pt-14 lg:h-[93vh] h-full flex flex-col  justify-start font-poppins">
      <div className="bg-white w-full py-2 lg:px-10 px-4">
        <BreadcrumbProduct items={breadcrumbItems} />
      </div>
      <div className="lg:h-[68%] h-full lg:px-10 px-4 z-30 lg:flex bg-white ">
        <div className="font-poppins lg:w-[75%] w-full">
          <div className="flex w-full h-full">
            <div className="flex items-start relative">
              {/* fixed text area */}
              <div className="lg:w-[50%]  h-full flex flex-col">
                <h1 className="lg:text-4xl text-[1.7rem] py-2 font-poppins">
                  <span className="bg-gradient-to-r  from-[#483d73] to-red-700 bg-clip-text text-transparent font-semibold block pb-1">
                    {first_name}
                  </span>{" "}
                  <span className="font-semibold bg-gradient-to-r from-[#483d73] to-red-700 bg-clip-text text-transparent">
                    Paper Cup Machine
                  </span>
                </h1>
                <div className="lg:h-[27%] h-full my-2 flex items-center break-words ">
                  <p
                    className="text-black leading-[1.5em] font-normal"
                    style={{
                      fontSize: fontSize,
                    }}
                  >
                    {introduction}
                  </p>
                </div>
                <div className="w-max rounded-full shadow-lg shadow-[#9e9c9c] hover:shadow-[#9e9c9c] hover:shadow-xl transition-all duration-300 group">
                  <button className="bg-[#483d73] rounded-full text-white py-1 pl-6 text-lg group-hover:bg-gradient-to-r transition-all duration-300 group-hover:from-[#483d73] group-hover:to-red-700 font-medium flex items-center">
                    Book Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      className="lg:w-6 w-5 lg:h-6 h-5 mx-4"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="32"
                        className="fill-[#ffffff] cursor-pointer"
                      />
                      <path
                        d="M25 20 L37 32 L25 44"
                        className="stroke-[#483d73] stroke-[4px] fill-none stroke-linecap-round stroke-linejoin-round "
                      />
                    </svg>
                  </button>
                </div>
                <div className="pl-2 lg:text-[2.8rem] mt-4 text-[2.2rem] font-bold font-poppins text-[#424242] italic ">
                  {" "}
                  {name}
                </div>
              </div>
              {/* fixeed image area */}
              <div className="lg:w-[50%] w-full h-full flex relative">
                <div className="lg:block hidden">
                  <ZigzagLine />
                </div>

                <div className="w-full h-[70%] lg:mt-[10%] flex relative">
                  <Image
                    ref={smallImageRef}
                    src={selectedImage}
                    height={800}
                    width={400}
                    alt="Flexo Printing Machine"
                    className="h-full object-contain w-full "
                  />
                  {/* Small image positioned at the top right corner */}
                  <div className="absolute top-0 right-0 p-2">
                    <Image
                      src={mimage}
                      height={60}
                      width={60}
                      alt="Small Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%] hidden lg:flex justify-end flex-col items-start">
          <div className="text-black mb-4">
            <h3 ref={titleRef} className="font-bold text-md mb-2">
              {advantages.title}
            </h3>
            <ul className="text-sm font-regular list-none">
              {advantages.items.map((advantage, index) => (
                <li
                  key={index}
                  ref={(el) => {
                    listItemRefs.current[index] = el;
                  }}
                  className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-black"
                >
                  {renderTextWithBoldColon(advantage)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative h-[32%] border-t-2 border-gray-300 flex lg:flex-row flex-col-reverse items-center">
        <div className="text-left text-xs font-medium text-gray-500 uppercase lg:w-[55%]">
          <InfoCard
            sizeRange="3 oz to 32 oz"
            speedRoundShapes="up to 180 cups/min."
            maxCups={180}
            bmp100Compact="BMP 100 COMPACT"
            bmp100Super="BMP 100 SUPER"
          />
        </div>
        <div className="flex lg:w-[45%] h-full items-center justify-center lg:my-0 my-4">
          {/* Left Arrow */}
          <div className="bg-white rounded-2xl lg:w-[33.5rem] w-[23rem] z-40 flex flex-row items-center justify-center p-4 ">
            {shouldShowArrows && (
              <button
                className="h-12 w-16 z-20 items-center rounded-full cursor-pointer flex  disabled:opacity-50"
                onClick={scrollLeft}
                disabled={!canScrollLeft}
              >
                left
              </button>
            )}

            <div
              className={`flex overflow-x-auto  ${
                shouldShowArrows ? "scroll-smooth" : `&quot`
              } [scrollbar-width:none] gap-3`}
              ref={carouselRef}
              onScroll={checkScrollability}
            >
              {images.map((image, index) => (
                <div key={index} className="flex flex-col ">
                  <motion.div
                    className={`relative flex-shrink-0 w-[8.4rem] h-24 border-2 rounded-2xl p-1 flex flex-col  ${
                      selectedImage === image ? "border-[#483d73]" : `&quot`
                    }`}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    onClick={() => setSelectedImage(image)} // Set selected image on click
                  >
                    <div className="relative w-full h-full flex ">
                      <Image
                        src={image}
                        alt={`Image ${index}`}
                        width={196}
                        height={196}
                        className="object-contain w-full h-full cursor-pointer"
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            {shouldShowArrows && (
              <button
                className="h-12 z-20 w-16 cursor-pointer rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={scrollRight}
                disabled={!canScrollRight}
              >
                forward
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machine;
