import MainLayout from "@/components/Home/MainLayout";
import { HomeData } from "@/components/Home/types/constant";
import { Metadata } from "next";
import { cookies } from "next/headers"; // Server-side (Next.js app directory)
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import { locales } from "@/i18n";


const apiUrl = "https://jsondatafromhostingertosheet.nesscoindustries.com/";
const countryUrl = "https://countryjson.nesscoindustries.com/";

// Define the allowed Twitter card types
type TwitterCardType = "summary" | "summary_large_image" | "player" | "app" ;

type Props = {
  params: { locale: string };
};

// Revalidate every 60 seconds (or any time period you prefer)
export const revalidate = 1;

// Fetch home data based on the locale
async function fetchHomeData(locale: string): Promise<HomeData | null> {
  try {
    const res = await fetch(`${apiUrl}${locale}/hero.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    const fallbackRes = await fetch(`${apiUrl}en/hero.json`, {
      cache: "no-store", // Ensures no caching for the fallback as well
    });
    const data = await fallbackRes.json();
    return data;
  }
}

type CountryNames = {
  [locale: string]: string; // Each locale key maps directly to the country name
};

async function fetchCountryData(locale: string): Promise<string> {
  const country = cookies().get("country")?.value || "in";
  console.log("countryname", country);

  try {
    const res = await fetch(`${countryUrl}${country}.json`);
    const countryData: CountryNames = await res.json();

    // Return the country name for the provided locale
    return countryData[locale] || countryData["en"]; // Fallback to English if the locale isn't available
  } catch (error) {
    const fallbackRes = await fetch(`${countryUrl}in.json`);
    const fallbackData: CountryNames = await fallbackRes.json();

    // Handle fallback case, also fallback to English if locale not available
    return fallbackData[locale] || fallbackData["en"];
  }
}

// Dynamically generate metadata using the fetched SEO data
export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  // Fallback to "en" if the locale isn't supported
  if (!locales.includes(locale as any)) {
    locale = "en";
  }
  const homeData = await fetchHomeData(locale);
  const countryName = await fetchCountryData(locale);

  if (!homeData && !countryName) {
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
      openGraph: {
        title: "Default OG Title",
        description: "Default OG Description",
        images: [
          {
            url: "/default-image.webp",
            alt: "Default Image Alt",
          },
        ],
      },
      robots: "index, follow",
      alternates: {
        canonical: "https://www.default.com",
      },
      twitter: {
        card: "summary_large_image",
        site: "@DefaultTwitter",
        title: "Default Twitter Title",
        description: "Default Twitter Description",
      },
    };
  }

  const seoData = homeData.home[0].homeSeoData;
  const country = cookies().get("country")?.value || "in";

  return {
    title:`${seoData?.title} - ${countryName} `,
    description: seoData?.description,
    keywords: seoData?.keywords,
    openGraph: {
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      url: seoData.alternates.canonical,
      images: seoData.openGraph.images.map((image) => ({
        url: image.url,
        alt: image.alt,
      })),
    },
    robots: seoData?.robots,
    alternates: {
      canonical:`https://nessco-services.vercel.app/${country}/${locale}`,
    },
    twitter: {
      card: seoData.twitter.card as TwitterCardType, // Explicitly cast to TwitterCardType
      site: seoData.twitter.site,
      title: seoData.twitter.title,
      description: seoData.twitter.description,
      images: [
        {
          url: seoData.twitter.image,
        },
      ],
    },
  };
}

// Home component rendering the MainLayout with fetched data
export default async function Home({ params: { locale } }: Props) {
  // Set default locale if not in supported list
  if (!locales.includes(locale as any)) {
    locale = "en"; // Fallback to English
  }

  // Set the locale for the request
  unstable_setRequestLocale(locale);

  // Fetch home data based on the locale
  const homeData = await fetchHomeData(locale);

  // Fetch translations based on the locale
  const t = await getTranslations({ locale });

  if (!homeData) {
    return <p>{t("failedToLoadData")}</p>;
  }

  return (
    <main>
      <MainLayout homeData={homeData} />
    </main>
  );
}
