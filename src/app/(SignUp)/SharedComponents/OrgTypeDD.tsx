"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type Props = {
  selectedOrg: string;
  setSelectedOrg: Function;
  //   handleSetValue: Function;
};
// { selectedOrg, setSelectedOrg, handleSetValue }
// React.FC<Props>
const OrgTypeDD: React.FC<Props> = ({ selectedOrg, setSelectedOrg }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const arr = ["type 1", "type 2", "type 3"];

  return (
    <div className="relative inline-block text-left w-full ">
      <label
        className='form_label'
        htmlFor="name"
      >
        Organization type <span className="text-[#ed4141]">*</span>
      </label>
      <button
        onClick={toggleMenu}
        type="button"
        className={`form_input focus:outline-none inline-flex justify-between w-full px-4 text-md font-medium text-gray-400 bg-white border rounded-md`}
      >
        {selectedOrg}
        {isOpen ? (
          <IoMdArrowDropup className="text-xl text-black" />
        ) : (
          <IoMdArrowDropdown className="text-xl text-black" />
        )}
      </button>

      {isOpen && (
        <div className={`form_input focus:outline-none absolute z-10 right-0 left-0 mt-2 origin-top-right bg-white border border-[#98A2B3] rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}>
          <div className="py-1">
            {arr?.map((option, index) => {
              return (
                <a
                  key={index}
                  onClick={() => {
                    setSelectedOrg(option);
                    setIsOpen(false);
                    // handleSetValue(option);
                    // setDisplayCountryError(false)
                  }}
                  className="block px-4 py-2 text-md font-medium text-black hover:bg-[#F1F1F1] hover:cursor-pointer rounded-lg"
                >
                  {option}
                </a>
              );
            })}
          </div>
        </div>
      )}
      {/* {displayCountryError === true && <p className="text-[#ed4141] text-xs">Please select an option </p>} */}
    </div>
  )
}

export default OrgTypeDD