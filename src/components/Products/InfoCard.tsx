// components/InfoCard.tsx

import Image from "next/image";
import { FC } from "react";
import watch from "../../../public/assets/product/watch.svg";

interface InfoCardProps {
  sizeRange: string;
  speedRoundShapes: string;
  maxCups: number;
  bmp100Compact: string;
  bmp100Super: string;
}

const InfoCard: FC<InfoCardProps> = ({
  sizeRange,
  speedRoundShapes,
  maxCups,
  bmp100Super,
}) => {
  return (
    <div className="w-full lg:px-10 px-4 text-xs font-poppins grid grid-cols-2 items-center">
      {/* Size range and speed round shapes */}
      <div className="font-poppins p-1 lg:h-16 border-b-2 border-r-2">
        <div className="flex justify-center pt-2 items-center space-x-2">
          <div className="flex flex-col gap-2">
            {/* SVG icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 2v20H6V2h2m4 0h2v20h-2V2m6 0h2v20h-2V2M4 2h2v20H4V2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.5v-5h-1V11h1v-.5a3 3 0 013-3h1v1h-1a2 2 0 00-2 2v.5h3v1h-3v5h-1zm4 0h1v-5h1v-1h-1v-.5a3 3 0 00-3-3h-1v1h1a2 2 0 012 2v.5h-3v1h3v5z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black text-xs font-poppins">
              Size range: {sizeRange}
            </p>
            <p className="text-black text-xs font-poppins">
              Speed round shapes: {speedRoundShapes}
            </p>
          </div>
        </div>
      </div>

      {/* Max cups */}
      <div className="flex border-b-2 h-16 px-4 gap-2 items-center">
        <div className="flex items-center justify-center">
          <Image
            src={watch}
            alt="Icon 1"
            width={200}
            height={200}
            className="w-8 h-8"
          />
        </div>
        <div className="text-4xl font-bold text-gray-500">{maxCups}</div>
      </div>

      {/* Cup variants */}
      <div className="flex p-1 flex-row border-r-2">
        <div className="flex flex-row items-center gap-2 pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 6H3V4h18v2zm0 4H3V8h18v2zm0 4H3v-2h18v2zm0 4H3v-2h18v2z" />
          </svg>
          <p>Cup Variants:</p>
        </div>
        <div className="flex justify-center gap-2">
          <div>
            <Image
              src="https://i.pinimg.com/236x/07/47/f0/0747f0e6e43dd8a115015727c50a3807.jpg"
              alt="Cup Icon 1"
              width={100}
              height={100}
              className="w-8 h-8"
            />
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/236x/07/47/f0/0747f0e6e43dd8a115015727c50a3807.jpg"
              alt="Cup Icon 2"
              width={100}
              height={100}
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>

      {/* Cups per minute */}
      <div className="flex flex-col pl-4">
        <div>up to 160 cups per minute ({bmp100Super})</div>
      </div>
    </div>
  );
};

export default InfoCard;
