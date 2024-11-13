import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type SupportItem = {
  title: string;
  image: StaticImageData;
  bgPic: StaticImageData;
};

interface MachineGridProps {
  supporItem: SupportItem[];
}


const MachineGrid: React.FC<MachineGridProps> = ({ supporItem }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      setTimeout(checkScrollability, 300); // Add a slight delay to check scrollability after the scroll is complete
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300); // Add a slight delay to check scrollability after the scroll is complete
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const shouldShowArrows = supporItem.length > 4;

  return (
    <div className="relative flex flex-row items-center mx-auto w-[68vw]">
      {/* Left Arrow */}
      {shouldShowArrows && (
        <button
          className="h-12 w-16 z-30 cursor-pointer rounded-full hidden lg:flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          back arrow
          {/* <IoIosArrowBack className="text-2xl text-gray-500" /> */}
        </button>
      )}
      
      {/* Carousel */}
      <div
        className={`hidden lg:flex overflow-x-auto py-8 ${
          shouldShowArrows ? "scroll-smooth" : ""
        } [scrollbar-width:none] gap-8`}
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        {supporItem.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <motion.div
              className="relative flex-shrink-0 w-[11rem] h-32 border-2  rounded-3xl p-4 flex flex-col justify-center items-center"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={imageVariants}
            >
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={item.image.src}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {shouldShowArrows && (
        <button
          className="h-12 z-30 w-16 cursor-pointer hidden rounded-full lg:flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          forward arrow
        </button>
      )}
    </div>
  );
};

export default MachineGrid;
