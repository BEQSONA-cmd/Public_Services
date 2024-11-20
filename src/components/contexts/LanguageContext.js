"use client";
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("EN");

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
    case "Standart User": return "სტანდარტული მომხმარებელი";
    case "Student": return "სტუდენტი";
    case "Prisoner": return "პატივი";
    case "Disabled Person": return "ინვალიდი";
    case "Issued in 1 day": return "1 დღეში გასაცემი";
      case "Issued in 3 days": return "3 დღეში გასაცემი";
      case "Issued in 10 days": return "10 დღეში გასაცემი";
      case "Receive": return "მიღება";
      case "Sent": return "გაგზავნა";
      case "Document Number": return "დოკუმენტის ნომერი";
      case "Private Number": return "პირადი ნომერი";
      case "Last Name": return "გვარი";
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
      default: return string;
  }
}

export function toEN (string) {
  switch (string) {
    case "სტანდარტული მომხმარებელი": return "Standart User";
    case "სტუდენტი": return "Student";
    case "პატივი": return "Prisoner";
    case "ინვალიდი": return "Disabled Person";
    case "1 დღეში გასაცემი": return "Issued in 1 day";
      case "3 დღეში გასაცემი": return "Issued in 3 days";
      case "10 დღეში გასაცემი": return "Issued in 10 days";
      case "მიღება": return "Receive";
      case "გაგზავნა": return "Sent";
      case "დოკუმენტის ნომერი": return "Document Number";
      case "პირადი ნომერი": return "Private Number";
      case "გვარი": return "Last Name";
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
      default: return string;
  }
}