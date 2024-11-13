import Image from "next/image";
export default function DetaillProcess() {
  return (
    <div className="w-full  py-14">
      <div className="flex flex-col md:flex-row">
        {/* Left side content */}
        <div className="md:w-[55%] bg-white py-4 shadow-lg h-full rounded-3xl p-4 pr-4">
          <div className="z-20 font-poppins">
            
            <span className="z-20">Process of</span>{" "}
            <span className="text-red-700 font-semibold ">Cup Formation</span>
          </div>

          <div className="mb-4">
            <h2 className="text-base text-[#483d73] font-semibold  mb-2">
              1. Raw material – Paper roll
            </h2>
            <p className="text-sm font-poppins">
              First of all, the paper used to make the paper container must be
              food-grade paper. Then, carry out the process of laminating.
              Coating the material that can resist oil and water before the
              subsequent forming steps.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-base text-[#483d73] font-semibold  mb-2">2. Printing</h2>
            <p className="text-sm font-poppins">
              After the lamination treatment, we will print the desired pattern
              and color on the paper roll. The patterns can be divided into 3
              methods: gravure, convex plate, and flat plate. The cost also
              grades into high, and it is more vastly used. Afterward, printing
              is continuously printed on paper rolls, and the required printing
              volume is large, lithographic printing in which paper is cut into
              pieces and then printed is suitable for making small quantities of
              products. After this is finished, the first layer of water-based
              treatment will be printed as protection. According to your needs,
              you can print your company logo and contact information on the
              cup.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-base text-[#483d73] font-semibold  mb-2">3. Cutting</h2>
            <p className="text-sm font-poppins">
              After printing, we will cut the paper roll according to the paper
              cup size. The printed paper enters the thin knife and produces a
              fan-shaped piece of paper, which is the unfolded shape of the wall
              of the paper cup. Then the fan-shaped paper is collected and sent
              to the forming machine.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-base text-[#483d73] font-semibold  mb-2">4. Forming</h2>
            <p className="text-sm font-poppins">
              In making a paper cup, we need to make the cup’s body and the
              cup’s bottom. The cup body uses the paper fan-shaped sheet. The
              bottom of the disposable paper cup is to cut out paper rolls of
              different specifications.
            </p>
            <p className="text-sm font-poppins">
              The paper body is then rolled up and made into the shape of a
              paper cup. At the same time, the molding provides heat at the seam
              of the paper so that the first is firmly adhered, the cup wall is
              made crack-proof, and the bottom of the paper cup fits that shape.
              Immediately after the mold pastes the mouth of the cup, the paper
              at the mouth of the cup is rolled down and fixed by heat to form
              the rim of the paper cup. These forming steps can be completed in
              one second.
            </p>
          </div>
        </div>

        {/* Right side images */}
        <div className="md:w-[45%] py-8 pl-4 grid grid-cols-4 gap-0">
          {new Array(12).fill(null).map((_, index) => {
            const item = [
              {
                src: "https://i.pinimg.com/564x/05/18/19/0518193226312b6e063392a0463e2ad3.jpg",
                alt: "Paper Roll",
                label: "Paper Roll",
              },
              {
                src: "https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBagMachine%20.png",
                alt: "Flexo Printing Machine",
                label: "Flexo Printing Machine",
              },
              {
                src: "https://i.pinimg.com/564x/0a/2e/2c/0a2e2c68584fdac405c48ab3f4dea218.jpg",
                alt: "Printed Paper Roll",
                label: "Printed Paper Roll",
              },
              {
                src: "https://assets.nesscoindustries.com/public/assets/nav_machine/FlexoPrintingMachine.png",
                alt: "Die Cutting Machine",
                label: "Die Cutting Machine",
              },
              {
                src: "https://i.pinimg.com/564x/eb/01/3b/eb013b639b14b25ac446ba2910172030.jpg",
                alt: "Paper Cups",
                label: "Paper Cups",
              },
              {
                src: "https://assets.nesscoindustries.com/public/assets/nav_machine/PCM110WithPLC.png",
                alt: "Paper Cup Machine",
                label: "Paper Cup Machine",
              },
              {
                src: "https://i.pinimg.com/564x/ab/41/53/ab41534d7760c92428597d5361908cd6.jpg",
                alt: "Bottom Paper Roll",
                label: "Bottom Paper Roll",
              },
              {
                src: "https://i.pinimg.com/564x/e7/bc/47/e7bc47bb1779c89e9c07aa30376aefe8.jpg",
                alt: "Paper Cup Form",
                label: "Paper Cup Form",
              },
              {
                src: "https://assets.nesscoindustries.com/public/assets/nav_machine/FullyAutomaticPaperBagMachine.png",
                alt: "Paper Cup Packing Machine",
                label: "Paper Cup Packing Machine",
              },
              {
                src: "https://i.pinimg.com/564x/c3/c2/4e/c3c24e737027ffc063eb87ebb092b30f.jpg",
                alt: "Paper Cup Packing Bag",
                label: "Paper Cup Packing Bag",
              },
            ][index];

            const renderArrow = () => {
              if ([0, 1, 2, 8].includes(index)) {
                return (
                  <svg
                    className="absolute inset-y-0 right-0 h-full w-10 -mr-6 z-20"
                    viewBox="0 0 40 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10 H30"
                      stroke="#8690bd"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 5 L35 10 L30 15"
                      stroke="#8690bd"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M2 10 L5 10"
                      stroke="#8690bd"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.3"
                    />
                  </svg>
                );
              }
              if ([3, 4].includes(index)) {
                return (
                  <svg
                    className="absolute inset-x-0 bottom-0 w-full h-10 z-20 -mb-6"
                    viewBox="0 0 20 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5 V30"
                      stroke="#8690bd"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 30 L10 35 L15 30"
                      stroke="#8690bd"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M10 2 V5"
                      stroke="#8690bd"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.3"
                    />
                  </svg>
                );
              }
              if ([5, 6, 7].includes(index)) {
                return (
                  <svg
                    className="absolute inset-y-0 left-0 h-full -ml-6 w-10"
                    viewBox="0 0 40 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35 10 H10"
                      stroke="#8690bd"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 5 L5 10 L10 15"
                      stroke="#8690bd"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M38 10 L35 10"
                      stroke="#8690bd"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.3"
                    />
                  </svg>
                );
              }
              return null;
            };

            return (
              <div
                key={index}
                className={`relative border-white p-1 ${
                  index % 4 === 0 || index % 4 === 1 || index % 4 === 2
                    ? "border-r-2"
                    : ""
                } ${![10, 9, 11, 8].includes(index) ? "border-b-2" : ""}`}
              >
                {item ? (
                  <div className="text-center h-48 bg-white  relative flex flex-col  items-center">
                    <div>
                      <p className="mt-4 top-0 text-sm font-poppins">
                        {item.label}
                      </p>
                      <div className="flex justify-center items-center">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={100}
                          height={200}
                          className="mt-4"
                        />
                      </div>
                    </div>
                    {renderArrow()}
                  </div>
                ) : (
                  <div className="bg-gray-100 h-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
