import Image from "next/image";
import React from "react";
import PositionAwareButton from "../ui/PositionAwareButton";

// Step 1: Constant Data Array
const machineData = [
  {
    title: "Paper Bowl Making Machine",
    speed: 70,
    speedUnit: "PCM/MIN",
    image: "https://assets.nesscoindustries.com/public/assets/nav_machine/FullyAutomaticPaperBagMachine.png",
    icon: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
  },
  {
    title: "Machine 2 Title",
    speed: 80,
    speedUnit: "PCM/MIN",
    image: "https://assets.nesscoindustries.com/public/assets/nav_machine/FullyAutomaticPaperBagMachine.png",
    icon: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
  },
  {
    title: "Machine 3 Title",
    speed: 90,
    speedUnit: "PCM/MIN",
    image: "https://assets.nesscoindustries.com/public/assets/nav_machine/FullyAutomaticPaperBagMachine.png",
    icon: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
  },
  {
    title: "Machine 4 Title",
    speed: 65,
    speedUnit: "PCM/MIN",
    image: "https://assets.nesscoindustries.com/public/assets/nav_machine/FullyAutomaticPaperBagMachine.png",
    icon: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
  },
  {
    title: "Machine 5 Title",
    speed: 85,
    speedUnit: "PCM/MIN",
    image: "https://assets.nesscoindustries.com/public/assets/nav_machine/FullyAutomaticPaperBagMachine.png",
    icon: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
  },
  {
    title: "Machine 6 Title",
    speed: 75,
    speedUnit: "PCM/MIN",
    image: "https://assets.nesscoindustries.com/public/assets/nav_machine/FullyAutomaticPaperBagMachine.png",
    icon: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
  },
];

const MachineCard: React.FC<{ machine: (typeof machineData)[0] }> = ({
  machine,
}) => {
  return (
    <div className="relative flex flex-col h-48 w-72 bg-[#483d73] rounded-bl-[2rem] m-4">
      {/* Circular Image Container */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-20 flex items-center justify-center h-52 w-52 bg-white border-[0.1rem] border-[#483d78] rounded-full">
        <Image
          src={machine.image}
          alt={machine.title}
          height={200}
          width={200}
        />
      </div>

      {/* Gray Top Section */}
      <div className="flex justify-between -ml-[1.2rem]">
        <div className="flex items-center justify-center w-32 h-14 p-2 ml-4 -mt-4 bg-gray-200 border-[0.1rem] border-[#483d78] rounded-[2rem]">
          <div className="flex items-center justify-center w-1/2 h-[3.2rem] p-2 rounded-full">
            <Image
              src={machine.icon}
              alt={`${machine.title} Icon`}
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[40%] h-[2.5rem] p-6 bg-white rounded-full">
            <div className="text-sm font-bold text-red-700">
              {machine.speed}
            </div>
            <div className="text-txs text-[#483d78] -mt-1">
              {machine.speedUnit}
            </div>
          </div>
        </div>
      </div>

      {/* Red Bottom Section */}
      <div className="flex-grow w-1/2 p-4 ml-4 mt-0 font-poppins rounded-bl-[2rem]">
        <div className="mb-2 text-lg text-center text-white w-28">
          {machine.title}
        </div>
        <div>
          <PositionAwareButton
            text="View Machine"
            bgColor="white"
            height="28px"
            width="120px"
            icon
            fontSize="10px"
            iconSize="16px"
          />
        </div>
      </div>
    </div>
  );
};

const MachineGrid: React.FC = () => {
  return (
    <div className="bg-black rounded-3xl p-6">
      <h1 className="font-poppins text-xl ">
        Related
        <span className="text-red-700 font-extrabold ml-2">Products</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 h-full">
        {machineData.map((machine, index) => (
          <MachineCard key={index} machine={machine} />
        ))}
      </div>
    </div>
  );
};

export default MachineGrid;
