import React, { createContext, useContext } from "react";
import { ChildrenProps } from "../types";

const DEFAULT_CURRENCY = ["CUP", "MLC", "USD", "EUR", "CAD"];

type CurrencyContextProps = {
  currency: string;
  currencyList: string[];
};

const defaultValue: CurrencyContextProps = {
  currency: DEFAULT_CURRENCY[0],
  currencyList: DEFAULT_CURRENCY,
};
export const CurrencyContext =
  createContext<CurrencyContextProps>(defaultValue);

export const CurrencyProvider = ({
  currency,
  currencyList,
  ...props
}: ChildrenProps & { currency?: string; currencyList?: string[] }) => {
  return (
    <CurrencyContext.Provider
      value={{
        currency: currency || DEFAULT_CURRENCY[0],
        currencyList: currencyList || DEFAULT_CURRENCY,
      }}
      {...props}
    />
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) return defaultValue;
  return context;
};
