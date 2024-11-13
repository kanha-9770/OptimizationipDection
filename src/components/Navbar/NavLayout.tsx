import { locales } from "@/i18n";
import NavbarDemo from "./Navbar";
import { NavbarData } from "./types/constant";
import { unstable_setRequestLocale } from "next-intl/server";
const apiUrl = "https://jsondatafromhostingertosheet.nesscoindustries.com/";
type Props = {
  params: { locale: string };
};
export const revalidate = 1;

async function fetchNavData(locale: string): Promise<NavbarData | null> {
  try {
    const res = await fetch(`${apiUrl}${locale}/navbar.json`, {
      cache: "no-store", // Ensures no caching, always fetch fresh data
    });

    // If response is not OK, fallback to English
    if (!res.ok) {
      console.warn(`Locale ${locale} not found, falling back to English.`);
      const fallbackRes = await fetch(`${apiUrl}en/navbar.json`, {
        cache: "no-store",
      });
      const fallbackData = await fallbackRes.json();
      return fallbackData;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching navbar data for locale ${locale}:`, error);

    // Fallback to English in case of any error
    const fallbackRes = await fetch(`${apiUrl}en/navbar.json`, {
      cache: "no-store",
    });
    const fallbackData = await fallbackRes.json();
    return fallbackData;
  }
}

export default async function NavLayout({ params: { locale } }: Props) {
  // Set default locale if not in supported list
  if (!locales.includes(locale as any)) {
    locale = "en"; // Fallback to English if the locale is not supported
  }
  
  // Set the locale for the request
  unstable_setRequestLocale(locale);

  // Fetch navbar data based on locale, falling back to English if necessary
  const navData = await fetchNavData(locale);

  // Fetch translations based on the locale

  return (
    <>
      <NavbarDemo navData={navData} />
    </>
  );
}
