"use client";
import React, { createContext, useContext, useState } from "react";
import { languages } from "@/app/data/navbar";
import i18n from "i18next";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const defaultLangCode = "EN"; 
    return (
      languages?.find(lang => lang.code === defaultLangCode) || languages?.[0]
    );
  });

  return (
    <GlobalStateContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
