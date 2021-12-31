import React from "react";

interface Props {}

const countries = [
  "Canada",
  "USA",
  "Mexico",
  "United Kingdom",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Portugal",
  "Brazil",
  "Argentina",
  "Chile",
  "Colombia",
  "Ecuador",
];

export const CountrySelection = (
  props: Props
) => {
  const [showSearchModule, setShowSearchModule] =
    React.useState(false);

  return (
    <div>
      <p className="text-md font-bold mb-6">
        Select your location
      </p>

      <div className=" rounded w-9/12 border border-black p-1 relative ">
        <span className=" font-light text-xs bg-white px-1 absolute bottom-7 left-4 ">
          Market
        </span>

        <button
          onClick={() =>
            setShowSearchModule((prev) => !prev)
          }
          className="  flex p-1 w-full items-center  relative"
        >
          <span className=" flex items-center w-full content-between ">
              <img
                src="./clipboard.svg"
                alt=""
                aria-hidden
                className="w-5 h-3 mx-2"
              />

            <span className="w-full  text-left  font-apercu-light font-semibold text-sm ">
              {" "}
              Canada
            </span>
          </span>

          <img
            src="./chevron-down.svg"
            alt="chevron-down"
            className="  w-4 h-4"
          />
        </button>

        {showSearchModule && (
          <div className=" bg-white drop-shadow-md absolute left-0 top-11 w-full h-80 p-2 rounded overflow-hidden">
            <form
              className=""
              action="#"
              method="GET"
            >
              {/* <label className="" htmlFor="search-field">
                      Search
                    </label> */}
              <input
                id="search-field"
                className="block h-full w-full rounded bg-gray-100 border-transparent py-2 pl-4 pr-1 text-gray-900 placeholder-gray-300 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
                // onChange={}
                // onKeyDown={}
              />
            </form>

            <ul className="h-full w-full overflow-auto space-y-4 pt-4 pb-10">
              {countries.map((country) => (
                <li className="w-full">
                  <button className="flex items-center w-full ">
                    <span className="w-full text-left font-apercu-light font-light text-sm flex gap-3  ">
                      <span className="py-1">
                        <img
                          src="./clipboard.svg"
                          alt="clipboard"
                          title="clipboard"
                          className="w-3 h-3 "
                        />
                      </span>
                      <span>{country}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
