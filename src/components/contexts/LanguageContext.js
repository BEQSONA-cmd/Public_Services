"use client";

import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("GE");

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "EN" ? "GE" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export function toGE (string) {
  switch (string) {
    case "document_number": return "საბუთის_ნომერი";
    case "private_number": return "პირადი_ნომერი";
    case "Standart": return "სტანდარტული";
    case "Student": return "სტუდენტი";
    case "Prisoner": return "პატიმარი";
    case "Disabled Person": return "შშმ პირი";
    case "Issued in 1 day": return "1 დღეში გასაცემი";
      case "Issued in 3 days": return "3 დღეში გასაცემი";
      case "Issued in 10 days": return "10 დღეში გასაცემი";
      case "Receive": return "მიღება";
      case "Sent": return "გაგზავნა";
      case "Document Number": return "საბუთის ნომერი";
      case "Private Number": return "პირადი ნომერი";
      case "Surname": return "გვარი";
      case "Name": return "სახელი";
      case "Status": return "სტატუსი";
      case "Region": return "რეგიონი";
      case "Select Region": return "აირჩიე რეგიონი";
      case "Imereti": return "იმერეთი";
      case "Achara": return "აჭარა";
      case "Guria": return "გურია";
      case "Samegrelo": return "სამეგრელო";
      case "City": return "ქალაქი";
      case "Select City": return "აირჩიე ქალაქი";
      case "Tbilisi": return "თბილისი";
      case "Kutaisi": return "ქუთაისი";
      case "Batumi": return "ბათუმი";
      case "Zugdidi": return "ზუგდიდი";
      case "Electric": return "ელექტრონული";
      case "Temporary": return "დროებითი";
      case "Permanent": return "მუდმივი";
      case "Post": return "ფოსტა";
      default: return string;
  }
}

export function toEN (string) {
  switch (string) {
    case "საბუთის_ნომერი": return "document_number";
    case "პირადი_ნომერი": return "private_number";
    case "სტანდარტული": return "Standart";
    case "სტუდენტი": return "Student";
    case "პატიმარი": return "Prisoner";
    case "შშმ პირი": return "Disabled Person";
    case "1 დღეში გასაცემი": return "Issued in 1 day";
      case "3 დღეში გასაცემი": return "Issued in 3 days";
      case "10 დღეში გასაცემი": return "Issued in 10 days";
      case "მიღება": return "Receive";
      case "გაგზავნა": return "Sent";
      case "საბუთის ნომერი": return "Document Number";
      case "პირადი ნომერი": return "Private Number";
      case "გვარი": return "Surname";
      case "სახელი": return "Name";
      case "სტატუსი": return "Status";
      case "რეგიონი": return "Region";
      case "აირჩიე რეგიონი": return "Select Region";
      case "იმერეთი": return "Imereti";
      case "აჭარა": return "Achara";
      case "გურია": return "Guria";
      case "სამეგრელო": return "Samegrelo";
      case "ქალაქი": return "City";
      case "აირჩიე ქალაქი": return "Select City";
      case "თბილისი": return "Tbilisi";
      case "ქუთაისი": return "Kutaisi";
      case "ბათუმი": return "Batumi";
      case "ზუგდიდი": return "Zugdidi";
      case "ელექტრონული": return "Electric";
      case "დროებითი": return "Temporary";
      case "მუდმივი": return "Permanent";
      case "ფოსტა": return "Post";
      default: return string;
  }
}