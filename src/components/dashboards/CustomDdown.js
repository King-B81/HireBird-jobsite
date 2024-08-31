import React, { useState } from 'react';
import { ReactComponent as LanguageIcon } from "../../assets/lang.svg"
import { ReactComponent as DropDownIcon } from "../../assets/SelectDropDown.svg"

const CustomDdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setopen] = useState(null);

  const options = [
    { label: 'Eng (US)', flag: <LanguageIcon /> },
    { label: 'Eng (UK)', flag: <LanguageIcon /> },
    { label: 'France', flag: <LanguageIcon /> },
    
  ];

  const handleSelect = (option) => {
    setopen(!open)
    setSelectedOption(option);
    // Add any other logic you need when an option is selected
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={()=>{setopen(!open)}}
          className="w-40 inline-flex justify-between  rounded-md border-none shadow-sm px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none"
        >
          {selectedOption ? (
            <div className="flex items-center space-x-2  text-white">
              <span>{selectedOption.flag}</span>
              <span>{selectedOption.label}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-white">
              <span><LanguageIcon /></span>
              <span>Eng (US)</span>
            </div>
          )}
          <DropDownIcon />
        </button>
      </div>

      <div className={`origin-top-right ${open?"flex":"hidden"} justify-center absolute bg-[#4b4a4ac0] right-0 mt-2 w-40 rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="block px-4 py-2 text-sm text-white hover:text-gray-900"
              role="menuitem"
            >
              <div className="flex items-center space-x-2">
                {option.flag}
                <span>{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDdown;
