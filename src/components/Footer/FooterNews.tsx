"use client";
import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LocaleSwitcher from "../Navbar/NavLayouts/CountryLayout";

interface FooterProps {
  footerData: {
    stores: { address: string }[]; // Adjusting to match the structure
    businessPartners: string;
    awards: { src: string; alt: string }[];
    clients: string;
    careers: { career: string }[];
    links: { link: string }[];
    services: { service: string }[];
    contacts: { href: string; name: string }[];
    address: string;
    copyright: string;
    socialIcons: { src: string; alt: string; imgclass?: string }[];
    privacyPolicy: string;
    storeTitle: string;
    businessTitle: string;
    languageTitle: string;
    clienteleTitle: string;
    carrersTitle: string;
    linkTitle: string;
    linkSecond: string;
    serviceTitle: string;
    subscribeTitle: string;
    contactusTitle: string;
    addressTitle: string;
    awarTitle: string;
  };
  country: string;
  langauge: string;
}

const FooterNew: React.FC<FooterProps> = ({
  footerData,
  }) => {
  const pathname = usePathname() || "";
  const componentCode = pathname.split("/")[2]?.toLowerCase();
  const componentCodeourCompany = pathname.split("/")[3]?.toLowerCase();
  const isDarkBackground =
    ["knowledge-center", "clientele", "our-company"].includes(componentCode) ||
    ["our-company"].includes(componentCodeourCompany);

  const textColor = isDarkBackground ? "text-white" : "text-black";

  return (
    <>
      <div className=" border-gray-50 border-2"></div>
      <footer
        className={`${isDarkBackground ? "bg-[#222222]" : "bg-white"} ${
          styles.footer
        }`}
      >
        <div className={`${styles.bgimagefooter}`}>
          {isDarkBackground && <div className={`${styles.overlay} `}></div>}
        </div>
        <div className="w-full relative m-auto mt-6 lg:p-0 p-3 md:p-5 z-20  ">
          <div className="flex flex-col-reverse  lg:flex-row  justify-evenly items-start w-[100%] lg:px-5  mb-[-0.10rem] ">
            <div className="flex flex-col-reverse lg:flex-row  lg:mt-0">
              <div
                className={`${styles.footerlistabout} lg:order-none lg:ml-[3rem]  lg:mt-0 -mt-[10rem] `}
              >
                <h1
                  className={`font-poppins text-sm md:text-xl lg:text-sm font-semibold md:w-[10rem] w-[7rem]  ${textColor}`}
                >
                  {footerData?.storeTitle}
                </h1>
                <div className="flex flex-col  -space-y-6 font-poppins w-[3rem] font-light text-xs lg:text-xs md:text-lg">
                  {footerData.stores.map((store, index) => (
                    <Link key={index} href="/" passHref>
                      <p className={`my-4 hover:text-red-600  ${textColor}`}>
                        {store.address}
                      </p>
                    </Link>
                  ))}
                </div>

                <h1
                  className={`font-poppins text-sm md:text-xl lg:text-sm font-semibold mt-4 lg:w-[10rem] w-[10rem] md:w-[13rem] ${textColor}`}
                >
                  {footerData.businessTitle}
                </h1>
                <p
                  className={`mt-3 font-light text-xs lg:text-xs md:text-lg lg:w-[9rem] md:w-[12rem] w-[10rem] font-poppins hover:text-red-600 cursor-pointer ${textColor}`}
                >
                  {footerData.businessPartners}
                </p>
                <h1
                  className={`font-poppins text-sm md:text-xl lg:text-sm font-semibold mt-4 lg:w-[10rem] md:w-[14rem] w-[10rem] ${textColor}`}
                >
                  {footerData.languageTitle}
                </h1>
                <div
                  className={`mt-3 font-light text-xs lg:text-xs md:text-lg font-poppins hover:text-red-600 cursor-pointer lg:w-[7rem] md:w-[10rem] w-[7rem] ${textColor}`}
                >
                  <LocaleSwitcher type="footer" />
                </div>
                <h3
                  className={`${styles.footerdesctitle} font-semibold font-poppins invert-0 text-sm md:text-xl lg:text-sm mt-6 lg:w-[14rem] md:w-[20rem] w-[15rem] `}
                >
                  {footerData.awarTitle}
                </h3>
                <div className="flex flex-row h-[3rem] w-[21rem] mb-4 -m-1 mt-3">
                  {footerData.awards.map((award, index) => (
                    <Image
                      key={index}
                      height={300}
                      width={300}
                      src={award.src}
                      alt={award.alt}
                      className="w-full h-full"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col  w-[11%] relative left-[10rem] lg:-left-10 md:left-[18rem] lg:top-0 top-[0.65rem] md:top-16">
                <h1
                  className={`font-semibold font-poppins text-sm md:text-xl lg:text-sm ${textColor}`}
                >
                  {footerData.clienteleTitle}
                </h1>
                <div className={styles.footerlistslink}>
                  <Link href="/" passHref>
                    <p
                      className={`font-poppins text-xs lg:text-xs md:text-lg font-light mt-4 w-[5rem] md:w-[7rem] hover:text-red-600 cursor-pointer ${textColor}`}
                    >
                      {footerData.clients}
                    </p>
                  </Link>
                </div>
                <h1
                  className={`font-semibold text-sm lg:text-xs md:text-lg font-poppins mt-5 ${textColor}`}
                >
                  {footerData.carrersTitle}
                </h1>
                <div className="text-xs lg:text-xs md:text-lg font-light font-poppins -space-y-7 hover:text-red-600 cursor-pointer w-[3rem]">
                  {footerData.careers.map((career, index) => (
                    <Link key={index} href="/" passHref>
                      <p className={`${styles.footeratags} ${textColor}`}>
                        {career.career}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex-row  flex lg:flex-none  lg:mt-0 mt-[2rem] lg:-ml-2 -ml-[0]">
                <div className="w-[19%] ">
                  <h1
                    className={`font-semibold text-sm md:text-xl lg:text-sm font-poppins  ${textColor}`}
                  >
                    {footerData.linkTitle}
                  </h1>
                  <div className="font-poppins text-xs lg:text-xs md:text-lg font-light space-y-10 hover:text-red-600   md:w-[5rem]  w-[4rem]">
                    {footerData.links.map((link, index) => (
                      <Link key={index} href="/" passHref>
                        <p className={`${styles.footeratags}  ${textColor}`}>
                          {link.link}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="w-[20%]  lg:ml-20 md:ml-[13rem] ml-10">
                  <h1
                    className={`font-semibold text-sm md:text-xl lg:text-sm font-poppins  ${textColor}`}
                  >
                    {footerData.linkSecond}
                  </h1>
                  <div className="font-poppins text-xs lg:text-xs md:text-lg font-light space-y-10 hover:text-red-600 w-[4rem] md:w-[5rem] ">
                    {footerData.links.map((link, index) => (
                      <Link key={index} href="/" passHref>
                        <p className={`${styles.footeratags}  ${textColor}`}>
                          {link.link}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col  w-[30%] lg:ml-20 md:ml-[8rem] ml-10 ">
                  <h1
                    className={`font-semibold font-poppins text-sm md:text-xl lg:text-sm   ${textColor}`}
                  >
                    {footerData.serviceTitle}
                  </h1>
                  <div className="font-poppins hover:text-red-600 font-light text-xs lg:text-xs md:text-lg w-[8.5rem] lg:w-[8.5rem] md:w-[13rem]  cursor-pointer">
                    {footerData.services.map((service, index) => (
                      <Link key={index} href="/" passHref>
                        <p className={`${styles.footeratags}  ${textColor}`}>
                          {service.service}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-[20%] lg:pl-14 order-last lg:order-none">
                <h1
                  className={`${styles.footerdesctitle} font-poppins invert-0 text-sm md:text-xl lg:text-sm font-semibold text-center lg:text-left  ${textColor}`}
                >
                  {footerData.subscribeTitle}
                </h1>
                <div className="flex p-1">
                  <input
                    placeholder="Enter your email address"
                    className=" lg:w-[24rem] w-[22rem] md:w-[47rem]  mt-2 h-[2.3rem] rounded-xl border p-2 border-black font-poppins font-light text-xs"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    className="-ml-10 lg:mt-[0.3rem] mt-3 lg:h-[3rem] lg:w-[3rem] h-[2rem] w-[2rem] "
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>

                <div className="flex lg:flex-col ">
                  <div className="  ">
                    <h1
                      className={`${styles.footerdesctitle} font-semibold   text-sm md:text-xl lg:text-sm font-poppins mt-[1.6rem]  ${textColor}`}
                    >
                      {footerData.contactusTitle}
                    </h1>
                    <div
                      className={`${styles.footerlistslink} hover:text-red-600 cursor-pointer font-poppins text-xs lg:text-xs md:text-lg font-light  w-[7rem] md:w-[10rem] `}
                    >
                      {footerData.contacts.map((contact, index) => (
                        <Link key={index} href={contact.href} passHref>
                          <p className={`${styles.footeratags}  ${textColor}`}>
                            {contact.name}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="flex flex-row space-x-2 mt-5  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                      >
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#212121"
                          fill-rule="evenodd"
                          d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#fff"
                          d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                        ></path>
                        <polygon
                          fill="#fff"
                          points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                        ></polygon>
                        <polygon
                          fill="#fff"
                          points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                        ></polygon>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 64 64"
                      >
                        <path d="M 31.820312 12 C 13.438312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.438313 52 31.820312 52 L 32.179688 52 C 50.561688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 43.994141 18 C 45.099141 17.997 45.997 18.889141 46 19.994141 C 46.003 21.099141 45.110859 21.997 44.005859 22 C 42.900859 22.003 42.003 21.110859 42 20.005859 C 41.997 18.900859 42.889141 18.003 43.994141 18 z M 31.976562 22 C 37.498562 21.987 41.987 26.454563 42 31.976562 C 42.013 37.498562 37.545437 41.987 32.023438 42 C 26.501437 42.013 22.013 37.545437 22 32.023438 C 21.987 26.501437 26.454563 22.013 31.976562 22 z M 31.986328 26 C 28.672328 26.008 25.992 28.701625 26 32.015625 C 26.008 35.328625 28.700672 38.008 32.013672 38 C 35.327672 37.992 38.008 35.299328 38 31.986328 C 37.992 28.672328 35.299328 25.992 31.986328 26 z"></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                      >
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h1
                      className={`${styles.footerdesctitle} font-poppins  text-sm md:text-xl lg:text-sm md:ml-[20rem] lg:ml-0 font-semibold lg:mt-5 mt-7  ${textColor}`}
                    >
                      {footerData.addressTitle}
                    </h1>
                    <div className="font-poppins hover:text-red-600 cursor-pointer text-xs lg:text-xs md:text-lg font-light mt-2 lg:ml-0  md:ml-[20rem]">
                      <p
                        className={` lg:w-[14rem] w-[12rem] md:w-[15rem] hover:text-red-600 ${textColor}`}
                      >
                        {footerData.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={`${styles.footerrights} ${
          isDarkBackground ? "bg-[#222222]" : "bg-white"
        } relative h-[6.5rem] lg:h-[4rem]`}
      >
        <div className={`${styles.footercontainerx} relative z-20`}>
          <p
            className={`lg:ml-14 font-poppins text-sm font-light  ${textColor}`}
          >
            {footerData.copyright}
          </p>
          <div className="border h-[2rem] border-gray-400 ml-5"></div>
          <Link href="/privacy-policy/" passHref>
            <p className={`font-poppins text-sm font-light ml-5 ${textColor}`}>
              {footerData.privacyPolicy}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default FooterNew;
