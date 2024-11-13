"use client"
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  // Extract the country code and language code from the pathname
  const segments = pathname.split("/").filter(Boolean);
  const country = segments[0]; // First segment is the country code
  const locale = segments[1];  // Second segment is the language code

  // Build the redirect URL
  const redirectUrl = `/${country}/${locale}`;

  // Redirect to the correct home page
  redirect(redirectUrl);
}
