const Inputs_GE = ({onChange}) => {
    const inputs = [
        {
            label: "დოკუმენტის ნომერი",
            type: "text",
            placeholder: "დოკუმენტის ნომერი",
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
    ];

    return inputs.map((input, index) => {
            
            if(input.type === "select"){
                return (
                    <label key={index} className="block text-sm font-medium">
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
                <label key={index} className="block text-sm font-medium">
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
  ];

  return inputs.map((input, index) => {

      if(input.type === "select"){
          return (
              <label key={index} className="block text-sm font-medium">
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
          <label key={index} className="block text-sm font-medium">
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

export default function FilterContainer({ onFilterChange , lang }) {
  const handleInputChange = (key, value) => {
      if(value === "Select Region" || value === "Select City" || value === "All") value = "";

      onFilterChange((prev) => ({ ...prev, [key]: value }));
  }

  return (
      <section className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4"
          >
                {lang === "EN" ? "Filter" : "ფილტრი"}
            </h2>
          <form className="grid grid-cols-4 gap-4">
                {lang === "EN" ? <Inputs_EN onChange={handleInputChange} /> : <Inputs_GE onChange={handleInputChange} />}
          </form>
      </section>
  );
}