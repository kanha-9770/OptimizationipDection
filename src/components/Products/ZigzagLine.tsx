import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ZigzagLine = () => {
  const zigzagRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      zigzagRef.current,
      { clipPath: "inset(0 100% 0 0)" }, // Start hidden from the right
      {
        clipPath: "inset(0 0% 0 0)", // Reveal fully from left to right
        duration: 1, // Duration of the tracing effect
        ease: "power2.out", // Smooth easing
      }
    );
  }, []);

  return (
    <div className="absolute -left-[40%] top-[55%] flex h-20 justify-center items-center overflow-hidden">
      <svg
        ref={zigzagRef}
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        zoomAndPan="magnify"
        viewBox="0 0 1500 1499.999933"
        height="200"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="6b7bcf8bd9">
            <path
              d="M 114.007812 537 L 1430.257812 537 L 1430.257812 962.960938 L 114.007812 962.960938 Z M 114.007812 537 "
              clipRule="nonzero"
            />
          </clipPath>
        </defs>
        <rect
          x="-150"
          width="180"
          fill="#ffffff"
          y="-149.999993"
          fillOpacity="1"
        />
        <rect
          x="-150"
          width="180"
          fill="#ffffff"
          y="-149.999993"
          fillOpacity="1"
        />
        <g clipPath="url(#6b7bcf8bd9)">
          <path
            fill="#483d73"
            d="M 129.683594 537.496094 L 114.007812 546.542969 L 118.535156 554.386719 L 193.742188 684.644531 L 1247.5 684.644531 L 1378.796875 912.0625 L 1382.222656 917.988281 C 1378.261719 922.710938 1375.867188 928.777344 1375.867188 935.355469 C 1375.867188 950.242188 1388.132812 962.507812 1403.019531 962.507812 C 1417.910156 962.507812 1430.171875 950.246094 1430.171875 935.355469 C 1430.171875 920.46875 1417.910156 908.203125 1403.019531 908.203125 C 1401.226562 908.203125 1399.472656 908.382812 1397.773438 908.722656 L 1394.472656 903.007812 L 1257.949219 666.546875 L 204.191406 666.546875 L 134.214844 545.335938 Z M 1403.019531 926.304688 C 1408.125 926.304688 1412.070312 930.25 1412.070312 935.355469 C 1412.070312 940.460938 1408.125 944.410156 1403.019531 944.410156 C 1397.914062 944.410156 1393.96875 940.460938 1393.96875 935.355469 C 1393.96875 930.25 1397.914062 926.304688 1403.019531 926.304688 Z M 1403.019531 926.304688 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </div>
  );
};

export default ZigzagLine;
