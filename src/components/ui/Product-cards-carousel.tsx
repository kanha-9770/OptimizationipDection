"use client";
import React, {
  useEffect,
  useState,
  createContext,
} from "react";

import { cn } from "@/lib/utils";
import {  motion } from "framer-motion";
import BlurImage from "./BlurImage";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      {items.length <= 10 ? (
        <>
          <div
            className=" cursor-grab grid grid-rows-2  w-full overflow-x-scroll overscroll-x-auto py-2 scroll-smooth [scrollbar-width:none]"
            ref={carouselRef}
            onScroll={checkScrollability}
          ></div>

          {items.length > 5 ? (
            <div
              className="grid grid-rows-2 w-full overflow-x-scroll overscroll-x-auto py-2 scroll-smooth [scrollbar-width:none]"
              ref={carouselRef}
              onScroll={checkScrollability}
            >
              <div className="relative  w-full">
                <div
                  className={cn(
                    "absolute right-0  z-10 h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                  )}
                ></div>

                <div
                  className={cn(
                    "flex flex-row  gap-4 ",
                    "max-w-7xl mx-auto"
                  )}
                >
                  {items
                    .slice(
                      0,
                      items.length % 2 === 0
                        ? items.length / 2
                        : Math.ceil(items.length / 2)
                    )
                    .map((item, index) => (
                      <div
                        key={"card" + index}
                        className="last:pr-[5%] md:last:pr-[0%] rounded-3xl"
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
              <div className="relative w-full">
                <div
                  className={cn(
                    "absolute right-0  z-20 h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                  )}
                ></div>

                <div
                  className={cn(
                    "flex flex-row mt-4  gap-4",
                    "max-w-7xl mx-auto"
                  )}
                >
                  {items
                    .slice(items.length / 2, items.length - 1)
                    .map((item, index) => (
                      <div
                        key={"card" + index}
                        className="last:pr-[5%] md:last:pr-[0%]  rounded-3xl"
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex w-full overflow-x-scroll overscroll-x-auto py-2 scroll-smooth [scrollbar-width:none]"
              ref={carouselRef}
              onScroll={checkScrollability}
            >
              <div className="relative mt-12 w-full">
                <div
                  className={cn(
                    "absolute right-0  z-10 h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                  )}
                ></div>

                <div
                  className={cn(
                    "flex flex-row  gap-4 pl-4",
                    "max-w-7xl mx-auto"
                  )}
                >
                  {items.slice(0, items.length).map((item, index) => (
                    <div
                      key={"card" + index}
                      className="last:pr-[5%] md:last:pr-[0%] rounded-3xl"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            className="flex  w-full overflow-x-scroll overscroll-x-auto py-2 scroll-smooth [scrollbar-width:none]"
            ref={carouselRef}
            onScroll={checkScrollability}
          >
            {items.length >= 10 && (
              <div className="">
                <div className="relative mt-12 w-full">
                  <div
                    className={cn(
                      "absolute right-0  z-10 h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                    )}
                  ></div>

                  <div
                    className={cn(
                      "flex flex-row  gap-4 pl-4",
                      "max-w-7xl mx-auto"
                    )}
                  >
                    {items.slice(0, items.length / 2).map((item, index) => (
                      <div
                        key={"card" + index}
                        className="last:pr-[5%] md:last:pr-[0%]  rounded-3xl"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative w-full">
                  <div
                    className={cn(
                      "absolute right-0  z-20 h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                    )}
                  ></div>

                  <div
                    className={cn(
                      "flex flex-row mt-4  gap-4 pl-4",
                      "max-w-7xl mx-auto"
                    )}
                  >
                    {items
                      .slice(items.length / 2, items.length - 1)
                      .map((item, index) => (
                        <div
                          key={"card" + index}
                          className="last:pr-[5%] md:last:pr-[0%]  rounded-3xl"
                        >
                          {item}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-end gap-2 mr-10">
            <button
              className="relative z-20 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              back arrow
            </button>
            <button
              className="relative z-20 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              forward arrow
            </button>
          </div>
        </>
      )}
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  return (
    <>
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      className="relative rounded-3xl bg-gray-100  h-52 w-48 md:h-[15rem] md:w-[12rem] overflow-hidden flex flex-col items-start justify-end z-10"
    >
      <div className="absolute inset-0 cursor-grab bg-gradient-to-t from-black/90 via-black/70 to-transparent z-30 " />
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0"
      />
      <motion.p
        layoutId={layout ? `title-${card.title}` : undefined}
        className="text-white md:text-base font-semibold max-w-xs text-left font-sans absolute bottom-4 left-4 z-40"
      >
        {card.title}
      </motion.p>
    </motion.button>
  </>  
  );
};
