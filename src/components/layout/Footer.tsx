import React from "react";

interface Props {}
const footerContent = [
  "Terms and conditions of purchase",
  " Privacy policy ",
  " Cookies policy ",
  "Cookies settings ",
  " SiteMap ",
];

export const Footer = (props: Props) => {
  return (
    <div className="mx-16 p-4 border-t flex   justify-between">
      <ul className="flex justify-around w-1/2 list-disc">
        {footerContent.map((item, index) => {
          return (
            <li
              className="font-light text-sm "
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="space-x-4 text-sm ">
        <span className="font-semibold">
          {" "}
          Canada | English
        </span>
        <span className="text-gray-400">
          {" "}
          &copy;2020 Breshka
        </span>
      </div>
    </div>
  );
};
