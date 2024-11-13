import React from "react";
import Arrow from "../../../public/assets/product/Arrow.png";
import Image from "next/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadcrumbProduct: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center font-poppins space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.href ? (
              <a
                href={item.href}
                className={`inline-flex items-center md:text-lg font-bold ${
                  item.current
                    ? "text-gray-500"
                    : "text-gray-700 hover:text-[#483d78] dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {index === 0 ? (
                  <>{item.label}</>
                ) : (
                  <>
                    <Image
                      src={Arrow}
                      height={800}
                      width={400}
                      alt="Arrow"
                      className="h-6 w-max pr-2"
                    />
                    {item.label}
                  </>
                )}
              </a>
            ) : (
              <span
                className={`inline-flex items-center font-poppins font-medium md:text-lg ${
                  item.current ? "text-gray-500" : "text-gray-500"
                }`}
              >
                {index !== 0 && (
                  <Image
                    src={Arrow}
                    height={800}
                    width={400}
                    alt="Arrow"
                    className="h-6 w-max pr-2"
                  />
                )}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbProduct;
