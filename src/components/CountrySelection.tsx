import React from 'react'

interface Props {
  
}

export const CountrySelection = (props: Props) => {
  return (
    <div className=" ">
            <p className="text-md font-bold mb-6">
              Select your location
            </p>

            <div className=" rounded w-9/12 border border-black p-1 relative ">
              <span className="font-apercu-light font-light text-xs bg-white px-1 absolute bottom-7 left-4 ">
                Market
              </span>

              <button className="  flex p-1 w-full items-center ">
                <span className=" flex items-center w-full content-between ">
                  <button className="mx-2">
                    <img
                      src="./clipboard.svg"
                      alt="location"
                      title="location"
                      className="w-5 h-3 "
                    />
                  </button>

                  <span className="w-full  text-left  font-apercu-light font-semibold text-sm ">
                    {" "}
                    Canada
                  </span>
                </span>

                <img
                  src="./chevron-down.svg"
                  alt="arrow"
                  className="  w-4 h-4"
                />
              </button>
                <div>
                  

                </div>

            </div>
          </div>
  )
}
