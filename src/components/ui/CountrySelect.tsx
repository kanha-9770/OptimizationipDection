import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./input";

type Country = {
  name: string;
  code: string; // ISO code
  phone: string; // Phone code
};

type CountrySelectProps = {
  isoCode: string; // ISO code to be passed as a prop
};

const CountrySelect = ({ isoCode }: CountrySelectProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = useState(""); // Stores the phone number input
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");




  // Fetch countries data
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countriesData = await response.json();
      const formattedCountries = countriesData.map((country: any) => ({
        name: country.name.common,
        code: country.cca2, // ISO code
        phone: country.idd.root
          ? country.idd.root +
            (country.idd.suffixes ? country.idd.suffixes[0] : "")
          : "",
      }));
      setCountries(formattedCountries);

      // Pre-select country based on passed ISO code
      const preSelectedCountry = formattedCountries.find(
        (country: Country) => country.code === isoCode.toUpperCase()
      );
      setSelectedCountry(preSelectedCountry || formattedCountries[0]); // Fallback to first country
    };

    fetchCountries();
  }, [isoCode]);

  // Handle country selection from the dropdown
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setPhoneNumber(""); // Reset phone number when the country is changed
  };

  // Handle phone number input
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formattedInput = input.replace(/[^0-9]/g, ""); // Allow only numbers
    setPhoneNumber(formattedInput);
  };

  // Handle search input for country filtering
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter countries based on search query
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full mx-auto">
      {/* Phone number input with country calling code inside the input */}
      <motion.div className="">
        <div className="relative w-full  px-1 flex items-center  overflow-hidden">
          <div
            className="flex h-8 w-[20%] border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-none rounded-l-lg px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedCountry && (
              <>
                <span
                  className={`iconify text-xl`}
                  data-icon={`flag:${selectedCountry.code.toLowerCase()}-4x3`}
                ></span>
                <strong className="ml-1">{selectedCountry.phone}</strong>
              </>
            )}
          </div>
          <Input
              type="tel"
              placeholder="Enter Phone Number"
              className="lg:w-80 placeholder:text-center rounded-none rounded-r-lg h-8 " // Ensure proper spacing for the country code
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
        </div>
      </motion.div>

      {isOpen && (
        <div className="absolute top-10 w-full bg-white rounded-md shadow-lg z-10">
          <input
            type="text"
            className="w-full px-4 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 py-2 bg-gray-100 rounded-t-md"
            placeholder="Search Country Name"
            value={searchQuery}
            onChange={handleSearch}
          />
          <ol
            id="scrollbar1"
            className="scrollbar-product-description list-none max-h-[15rem] overflow-y-auto"
          >
            {filteredCountries.map((country) => (
              <li
                key={country.code}
                className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleCountrySelect(country)}
              >
                <div className="flex items-center space-x-2">
                  <span
                    className={`iconify`}
                    data-icon={`flag:${country.code.toLowerCase()}-4x3`}
                  ></span>
                  <span>{country.name}</span>
                </div>
                <span>{country.phone}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
