import React, { useMemo, useState } from "react";
import { Listbox } from "@headlessui/react";

import { ShoppingBagIcon } from "@heroicons/react/outline";

import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";

interface Props {
  selectedCountry: ICountries | string;
  setSelectedCountry;
}

interface ICountries {
  name: string;
  store: boolean;
}

const countries = [
  { name: "Canada", store: true },
  { name: "USA", store: true },
  { name: "Mexico", store: false },
  { name: "United Kingdom", store: true },
  { name: "France", store: true },
  { name: "Germany", store: true },
  { name: "Italy", store: true },
  { name: "Spain", store: true },
  { name: "Portugal", store: true },
  { name: "Brazil", store: false },
  { name: "Argentina", store: true },
  { name: "Chile", store: false },
  { name: "Colombia", store: false },
  { name: "Ecuador", store: true },
];

export const CountrySelection = ({
  selectedCountry,
  setSelectedCountry,
}: Props) => {
  const [search, setSearch] =
    useState<string>("");

  const searchResults = useMemo(
    () =>
      countries.filter((country) =>
        country.name
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [search]
  );

  const checkHasIcon = (
    country: ICountries | string
  ) => {
    const countryObj = countries.find(
      (c) => c.name === country
    );
    if (countryObj) {
      return countryObj.store;
    }
    return false;
  };

  return (
    <div>
      <p className="text-md font-extrabold mb-6">
        Select your location
      </p>
      <div className="flex gap-2 relative">
        <Listbox
          value={selectedCountry}
          onChange={setSelectedCountry}
        >
          {({ open }) => (
            <>
              <Listbox.Button className=" rounded w-9/12 border border-black  h-10 relative flex items-center  ">
                <label className=" font-light text-xs bg-white px-1 absolute bottom-8 left-4 ">
                  Market
                </label>

                {checkHasIcon(selectedCountry) ? (
                  <ShoppingBagIcon className="w-5 h-5 ml-5" />
                ) : (
                  ""
                )}

                <span className="w-full text-left ml-4 font-apercu-light font-medium text-sm ">
                  {selectedCountry}
                </span>
                {open ? (
                  <ChevronUpIcon className="w-6 h-6  mx-4" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6  mx-4" />
                )}
              </Listbox.Button>

              <Listbox.Options className="bg-white drop-shadow-md absolute w-9/12 left-0 top-11  pt-11 rounded overflow-hidden">
                <div className="absolute top-2 left-2 right-2">
                  <input
                    id="search-field"
                    className="block 
                  w-full 
                  rounded 
                  bg-gray-100 
                  border-transparent 
                  py-2 
                  pl-4 
                  pr-1 
                  text-gray-900 
                  placeholder-gray-300 
                  focus:outline-none 
                  focus:placeholder-gray-400 
                  focus:ring-0 
                  focus:border-transparent 
                  sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />
                </div>
                <div className="overflow-auto max-h-64">
                  {searchResults.map(
                    (country) => (
                      <Listbox.Option
                        key={country.name}
                        value={country.name}
                        className="flex items-center gap-2 p-2 w-full text-left font-apercu-light font-light text-sm hover:bg-gray-50 cursor-pointer hover:font-bold"
                      >
                        <span className="w-4 pl-2">
                          {country.store ? (
                            <ShoppingBagIcon className="w-3 h-3" />
                          ) : (
                            ""
                          )}
                        </span>
                        <span className="  text-xs  pl-3">
                          {country.name}
                        </span>
                      </Listbox.Option>
                    )
                  )}
                </div>
              </Listbox.Options>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};
