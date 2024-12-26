import { useData } from "../contexts/DataContext";
import { toEN } from "../contexts/LanguageContext";
import FilterModal from "../Layout/Modal.js";
import React, { useState } from 'react';

const Inputs_GE = ({onChange}) => {
    const inputs = [
        {
            label: "საბუთის ნომერი",
            type: "text",
            placeholder: "საბუთის ნომერი",
        },
        {
            label: "პირადი ნომერი",
            type: "text",
            placeholder: "პირადი ნომერი",
        },
        {
            label: "სახელი",
            type: "text",
            placeholder: "სახელი",
        },
        {
            label: "გვარი",
            type: "text",
            placeholder: "გვარი",
        },
        {
            label: "რეგიონი",
            type: "select",
            options: [
                "აირჩიე რეგიონი",
                "იმერეთი",
                "აჭარა",
                "გურია",
                "სამეგრელო",
            ],
        },
        {
            label: "ქალაქი",
            type: "select",
            options: [
                "აირჩიე ქალაქი",
                "ქუთაისი",
                "ბათუმი",
                "თბილისი",
                "ზუგდიდი",
            ],
        },
        {
            label: "კურიერი",
            type: "select",
            options: [
                "აირჩიე კურიერი",
                "მურთაზი",
                "ზიტო",
                "მაქსიმე",
            ],
        },
    ];

    return inputs.map((input, index) => {
            
            if(input.type === "select"){
                return (
                    <label key={index} className="block text-xs font-medium">
                        {input.label}
                        <select
                            onChange={(e) => onChange(input.label.toLowerCase().replace(" ","_"), e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
                        >
                            {input.options.map((option, index) => (
                                <option key={index}>{option}</option>
                            ))}
                        </select>
                    </label>
                );
            }
    
            return (
                <label key={index} className="block text-xs font-medium">
                    {input.label}
                    <input
                        onChange={(e) => onChange(input.label.toLowerCase().replace(" ","_"), e.target.value)}
                        type={input.type}
                        className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
                        placeholder={input.placeholder}
                    />
                </label>
            );
        }
    );
}

const Inputs_EN = ({onChange}) => {
  const inputs = [
      {
          label: "Document Number",
          type: "text",
          placeholder: "Document Number",
      },
      {
          label: "Private Number",
          type: "text",
          placeholder: "Private Number",
      },
      {
          label: "Name",
          type: "text",
          placeholder: "Name",
      },
      {
          label: "Surname",
          type: "text",
          placeholder: "Surname",
      },
      {
          label: "Region",
          type: "select",
          options: [
              "Select Region",
              "Imereti",
              "Achara",
              "Guria",
              "Samegrelo",
          ],
      },
      {
          label: "City",
          type: "select",
          options: [
              "Select City",
              "Kutaisi",
              "Batumi",
              "Tbilisi",
              "Zugdidi",
          ],
      },
    {
        label: "Curier",
        type: "select",
        options: [
            "Select Curier",
            "Murtazi",
            "Zito",
            "Maxime",
        ]
    },
  ];

  return inputs.map((input, index) => {

      if(input.type === "select"){
          return (
              <label key={index} className="block text-xs font-medium">
                  {input.label}
                  <select
                      onChange={(e) => onChange(input.label.toLowerCase().replace(" ","_"), e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
                  >
                      {input.options.map((option, index) => (
                          <option key={index}>{option}</option>
                      ))}
                  </select>
              </label>
          );
      }

      return (
          <label key={index} className="block text-xs font-medium">
              {input.label}
              <input
                  onChange={(e) => onChange(input.label.toLowerCase().replace(" ","_"), e.target.value)}
                  type={input.type}
                  className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
                  placeholder={input.placeholder}
              />
          </label>
      );
  });
};

export default function FilterContainer({ lang }) 
{
    const { setFilters } = useData();

    const [isModalOpen, setModalOpen] = useState(false);

    const openFilterModal = () => setModalOpen(true);
    const closeFilterModal = () => setModalOpen(false);

    const handleInputChange = (key, value) => {
      if(lang == "GE")
      {
          key = toEN(key);
          value = toEN(value);
          key = key.toLowerCase();
      }
      if(value === "Select Region" || value === "Select City" ) value = "";
      setFilters((prev) => ({ ...prev, [key]: value }));
  }

    return (
    <section className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="relative flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold">
                <button
                    onClick={openFilterModal}
                    className="font-bold transition-transform transform hover:scale-105 border rounded py-1 px-2 border-gray-500"
                >
                    <span className="mr-2">{lang === "EN" ? "Filter" : "ფილტრი"}</span>
                    <div className="inline-block text-lg">
                        &#8801;
                    </div>
                </button>
                <button
                    className="font-bold transition-transform transform hover:scale-105 absolute right-0 border rounded py-1 px-2 border-gray-500"
                >
                    {lang === "EN" ? "Auto Add" : "ავტომატური დაჯობვა"}
                </button>
            </h2>
        </div>
        <form className="grid grid-cols-7 gap-4">
        {lang === "EN" ? 
        <Inputs_EN onChange={handleInputChange} /> : <Inputs_GE onChange={handleInputChange} 
        />}
        </form>
        <FilterModal
        isModalOpen={isModalOpen}
        closeFilterModal={closeFilterModal}
        lang={lang}
        />
    </section>
    );
}
