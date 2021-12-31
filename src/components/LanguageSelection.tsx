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

