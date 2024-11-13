"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
interface LinkUrlProps extends Omit<LinkProps, "href"> {
  href?: string; // Optional href, defaults to home page ('/')
  className?: string; // Optional className for custom styling
  children: React.ReactNode; // Content to render within the link
}
const LinkUrl: React.FC<LinkUrlProps> = ({
  href = "/", // Default path
  prefetch = true, // Default to prefetching
  className = "", // Default to an empty string for className
  children,
  ...rest
}) => {
  const pathname = usePathname(); // Get the current URL path

  // Split the pathname to extract countryCode and locale
  const segments = pathname.split("/").filter(Boolean); // Removes empty segments
  const countryCode = segments[0] || "default-country"; // First segment is countryCode
  const locale = segments[1] || "default-locale"; // Second segment is locale

  // Construct the full URL
  const url = `/${countryCode}/${locale}${href}`;

  return (
    <Link href={url} prefetch={prefetch} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default LinkUrl;
