"use client";
import React, { useRef, useState } from "react";
import Image from "next/image"; // Import Image from next/image for optimization
import dynamic from "next/dynamic";

const ProductModal = dynamic(() => import("./ProductModal"));

type Card = {
  description: string;
  items: { className: string; text: string }[];
  firstname: string;
  secondname: string;
  image: string;
  title: string;
  icon: string; // Use `string` since StaticImageData is not needed when using next/image
  category: string;
  content?: React.ReactNode;
};

const Card = ({ card }: { card: Card; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="fixed font-poppins inset-0 h-screen z-[99999] overflow-auto">
          <div className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
          <div
            ref={containerRef}
          >
            <button
              className="sticky z-[99999] top-0 h-8 w-8 right-0  ml-auto rounded-full flex items-center justify-center"
              onClick={handleClose}
            >
              {/* SVG Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-1.024-0.391-1.414,0c-0.391,0.391-0.391,1.024,0,1.414C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z"></path>
              </svg>
            </button>
            <div className="py-0">
              <ProductModal
                image={card.image}
                title={card.title}
                description={card.description}
                buttons={[{ text: "Know Machine", icon: true }]} // Customize buttons if needed
                items={card.items}
                firstname={card.firstname}
                secondname={card.secondname}
              />
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleOpen}
        className="h-48 rounded-3xl bg-white font-poppins p-1 lg:p-2 w-40 lg:h-[16rem] md:w-56 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="relative p-2 h-full w-full">
          <div className="absolute flex bg-white h-14 lg:h-16 w-24 lg:w-32 flex-row top-0 space-x-2 -mr-4 right-0 z-40 rounded-bl-xl">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 -ml-4 mt-0"
              >
                <path
                  d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                  fill="white" // Use the color prop here
                ></path>
              </svg>
            </div>
            <div className="flex flex-row h-14 w-12 lg:w-20 items-center justify-center">
              <div className="h-full w-16 lg:h-20 lg:w-20 flex items-center justify-center">
                {/* Use Image for icon */}
                <Image
                  src={card.icon}
                  alt="icon"
                  height={100}
                  width={100}
                  loading="lazy"
                  quality={75} // Compress image quality for performance
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12 -mr-4  border-2 border-[#483d78] rounded-full bg-white inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg lg:text-base font-bold text-[#dc0e2a]">
                    70
                  </span>
                  <span className="text-5 text-[#483d78]">PCM/MIN</span>
                </div>
              </div>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 mt-14 lg:mt-16 mr-4"
              >
                <path
                  d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                  fill="white" // Use the color prop here
                ></path>
              </svg>
            </div>
          </div>

          {/* Use next/image for main image */}
          <Image
            src={card.image}
            alt={card.title}
            height={640}
            width={480}
            className="border-2 bg-[#f2f2f2] rounded-[1.5rem] absolute h-full object-contain  z-10 inset-0"
            quality={75} // Compress image quality for optimization
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Serve appropriate image sizes
          />
          <div className="absolute -mb-2 font-poppins left-0 right-0 bottom-0 z-40 p-4">
            <h3 className="text-black font-poppins text-sm md:text-base font-regular text-left">
              {card.title}
            </h3>
          </div>
        </div>
      </button>
    </>
  );
};

export default Card;
