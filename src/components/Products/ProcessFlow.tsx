"use client";
import React, { useEffect, useRef} from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface PageData {
  title1: string;
  title2: string;
  description: string;
  img: string;
}

export interface Page4Data {
  title: string;
  paragraph: string;
  container: PageData[];
}

export interface ProcessFlowProps {
  page4Data: Page4Data;
}

// ProcessFlow component
const ProcessFlow: React.FC<ProcessFlowProps> = ({ page4Data }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderImgRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const title2Refs = useRef<(HTMLHeadingElement | null)[]>([]);
  useEffect(() => {
    if (borderImgRef.current) {
      gsap.fromTo(
        borderImgRef.current,
        { height: "10%" },
        {
          height: "95%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "25% 70%",
            end: "95% 80%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    
    imageRefs.current.forEach((imageRef, idx) => {
      const title2Ref = title2Refs.current[idx];
      if (imageRef && title2Ref) {
        gsap.set(title2Ref, { opacity: 0, y: 20 });
        gsap.fromTo(
          imageRef,
          { scale: 1 },
          {
            scale: 1.1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: imageRef,
              start: "-10% 70%",
              end: "bottom 80%",
              scrub: true,
              onUpdate: (self) => {
                if (self.progress > 0.5) {
                  gsap.to(title2Ref, { opacity: 1, y: 0, duration: 0.5 });
                } else {
                  gsap.to(title2Ref, { opacity: 0, y: 20, duration: 0.5 });
                }
              },
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="h-full w-full bg-white rounded-xl font-poppins">
      <div className="z-20 lg:text-3xl text-2xl font-poppins mt-10 pt-8 px-8">
        <span className="z-20 text-[#483d73] font-medium">Process of</span>{" "}
        <span className="text-red-700 font-semibold">Cup Formation</span>
      </div>
      <div
        className="rounded-xl h-full bg-white  p-6 font-poppins"
        ref={carouselRef}
      >
        <div className="lg:px-[1rem]">
          <div className="border-t-[0.2rem] border-solid border-white w-[8rem] mt-[1rem]"></div>
        </div>

        <div className="relative">
          <div className="lg:w-[1.7rem] w-[1.2rem] lg:h-[1.7rem] z-20 h-[1.2rem] bg-white border-2 border-solid border-red-700 absolute lg:left-[5.5rem] left-[3rem] lg:-top-[3rem] -top-[1rem] rounded-full"></div>
          <div
            className="border-solid lg:border-r-[0.2rem] border-r-2 border-red-700 absolute lg:-top-[2rem] -top-[0.5rem] lg:left-[6.25rem] left-[3.55rem] z-10"
            ref={borderImgRef}
          ></div>

          {page4Data?.container.map((item, idx) => (
            <div key={idx} className="flex lg:my-[3rem] my-[2vh] items-center">
              <div className="lg:w-[25%] w-[40%] relative flex lg:pl-[2rem]">
                <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-center">
                  <h3
                    className="text-black text-xs font-semibold bg-white p-2 rounded-xl"
                    ref={(el) => {
                      title2Refs.current[idx] = el;
                    }}
                  >
                    {item.title2}
                  </h3>
                </div>
                <div
                  className="lg:w-[9rem] w-[7rem] bg-[#f5f5f5] rounded-xl z-20 h-[7rem] lg:h-[9rem] border-[1px] overflow-hidden cursor-pointer"
                  ref={(el) => {
                    imageRefs.current[idx] = el;
                  }}
                >
                  <Image
                    className="h-full w-full"
                    width={400}
                    height={400}
                    src={item.img}
                    alt={item.title1}
                  />
                </div>
              </div>

              <div className="lg:w-[70%] w-[60%] pl-[1rem] font-poppins">
                <h2 className="lg:text-base text-lg font-semibold text-[#483d73] lg:mb-[0.6rem] mb-[0.8vh]">
                  {item.title1}
                </h2>
                <p className="text-sm font-regular">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
