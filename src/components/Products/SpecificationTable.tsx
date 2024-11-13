import React from "react";

const SpecificationTable: React.FC = () => {
  return (
    <div className="w-[50%] flex justify-center items-center font-poppins">
      <table className="w-full rounded-2xl overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-[#483d73] text-white">
            <th className="p-1 border-r border-white text-base font-semibold text-center">FEATURE</th>
            <th className="p-1 text-base font-semibold text-center">SPECIFICATION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, key) => (
            <tr key={key} className="group">
              {/* Left column (Feature) with a specific background color */}
              <td className="border-t border-gray-300 p-1 text-sm font-normal text-center bg-[#efecf8] group-hover:bg-[#bfb9d6] ">
                {row.feature}
              </td>

              {/* Right column (Specification) with a different background color */}
              <td className="border-t p-1 text-sm font-regular text-center bg-white group-hover:bg-[#bfb9d6]">
                {row.spec}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Sample data to replace with actual data
const data = [
  { feature: "Speed", spec: "180 Cups / min" },
  { feature: "Paper Specifications", spec: "170 - 380 GSM" },
  { feature: "Raw Materials", spec: "Single or Double PE/PLA Coated Paper" },
  { feature: "Cup Size", spec: "2.5 - 26 oz" },
  { feature: "Cup Top Dia (TD)", spec: "60 - 95 mm" },
  { feature: "Cup Height (H)", spec: "50 - 135 mm" },
  { feature: "Cup Bottom Dia (RB)", spec: "40 - 75 mm" },
  { feature: "Cup Knurling Depth (KD)", spec: "3.5 - 10 mm" },
  { feature: "Voltage", spec: "3 Phase | 380 V; 50 Hz" },
  { feature: "Total Power", spec: "35 kW" },
  { feature: "Weight", spec: "3500 Kg" },
  { feature: "Dimensions", spec: "3700 x 1520 x 1940 mm" },
  { feature: "Air Pressure", spec: "0.6 - 0.8 Mpa" },
  { feature: "Air Flow Rate", spec: "30 CFM" },
];

export default SpecificationTable;
