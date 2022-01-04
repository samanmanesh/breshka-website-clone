import React from "react";

interface Props {}

const WishList = (props: Props) => {
  return (
    <div className=" w-full  space-y-40 flex-grow">
      <h1 className="font-semibold text-xl px-9 py-6 ">
        My favourites
      </h1>
      <section className="flex-col  text-center   ">
        
        <img
          src="/wishlist-figure.png"
          className=" w-48 h-48 mx-auto"
        />
        <h3 className="font-bold">You don’t have any favorites</h3>
        <p className="  py-2 mb-6 text-sm "> Did you know we update our collection every <br/> week?</p>
        <button className="btn p-3"> SEE WHAT'S NEW </button>
      </section>
    </div>
  );
};

export default WishList;
