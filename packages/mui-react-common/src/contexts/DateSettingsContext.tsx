import React, { createContext, useContext } from "react";

// Data value of the provider context
type DateSettingsContextValue = {
  locale: any | undefined;
  defaultFormat: string;
};
// default value of the context
const defaultValue: DateSettingsContextValue = {
  locale: undefined,
  defaultFormat: "PP",
};

// create context
const DateSettingsContext =
  createContext<DateSettingsContextValue>(defaultValue);

// Proptypes of Provider component
type DateSettingsContextProps = {
  children: any;
  defaultFormat?: string;
  localeMap: {
    [key: string]: any;
  };
  locale: string;
};

/**
 * Provider component
 * */
const DateSettingsProvider = ({
  localeMap,
  locale,
  defaultFormat = "PP",
  ...props
}: DateSettingsContextProps) => {
  return (
    <DateSettingsContext.Provider
      value={{ locale: localeMap[locale], defaultFormat }}
      {...props}
    />
  );
};

// Default hook to retrieve context data
const useDateSettings = () => {
  const context = useContext(DateSettingsContext);
  if (context === undefined) {
    return defaultValue; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { DateSettingsProvider, useDateSettings };
