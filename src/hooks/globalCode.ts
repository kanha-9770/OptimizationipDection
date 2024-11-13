// Store global variables
let globalCountryCode: string | undefined;
let globalLocale: string | undefined;

// Setter functions
export const setGlobalCountryCode = (countryCode: string) => {
  globalCountryCode = countryCode;
};

export const setGlobalLocale = (locale: string) => {
  globalLocale = locale;
};

// Getter functions
export const getGlobalCountryCode = () => globalCountryCode;
export const getGlobalLocale = () => globalLocale;
