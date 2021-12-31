import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

interface Props {}

const languageOptions = ["EN", "PT", "ES", "FR"];

export const LanguageSelection = (
  props: Props
) => {
  let [language, setLanguage] = useState(
    languageOptions[0]
  );

  return (
    <div >
    
      <RadioGroup
        value={language}
        onChange={setLanguage}
      >
        <RadioGroup.Label className=" block text-md font-extrabold mb-5">
          Select your language
        </RadioGroup.Label>

        <div className="flex gap-3">
          {languageOptions.map((language) => (
            <RadioGroup.Option
              value={language}
              key={language}
            >
              {({ checked }) => (
                <span
                  className={`
                btn-round
                ${
                  checked
                    ? "bg-black text-white"
                    : ""
                }
              `}
                >
                  {language}
                </span>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

{
  /* <div className="">
          <p className="text-md font-bold mb-6">
            Select your language
          </p>

          <div className="flex gap-2">
            <span
              className={`btn-round ${
                selectedLanguage
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              EN
            </span>
            <span className={`btn-round  `}>
              PT
            </span>
            <span className={`btn-round  `}>
              ES
            </span>
            <span className={`btn-round  `}>
              FR
            </span>
          </div>
        </div> */
}
