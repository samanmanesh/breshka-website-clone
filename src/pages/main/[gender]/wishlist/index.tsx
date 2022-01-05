import React from "react";

interface Props {}
const footerContent = [
  "Terms and conditions of purchase",
  " Privacy policy ",
  " Cookies policy ",
  "Cookies settings ",
  " SiteMap ",
];

const WishList = (props: Props) => {
  return (
    <div className=" w-full space-y-36 flex-grow">
      <h1 className=" px-9 py-6"></h1>
      <section className="flex-col text-center">
        <img
          src="/wishlist-figure.png"
          className=" w-48 h-48 mx-auto"
        />
        <h3 className="font-bold">
          You don’t have any favorites
        </h3>
        <p className="  py-2 mb-6 text-sm ">
          {" "}
          Did you know we update our collection
          every <br /> week?
        </p>
        <button className="btn p-3">
          {" "}
          SEE WHAT'S NEW{" "}
        </button>
      </section>

      {/*Footer */}
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
    </div>
  );
};

export default WishList;
