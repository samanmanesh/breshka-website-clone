import React from "react";

interface Props {}

const WishList = (props: Props) => {
  return (
    <div className="bg-red-300 w-full h-screen">
      <h1 className="font-bold text-xl px-9 py-6">
        My favorites
      </h1>
      <section className="flex-col place-items-center  ">
        <img
          src="/wishlist-figure.png"
          className=" w-36 h-auto"
        />
        <h3>You don’t have any favorites</h3>
        <p> Did you know we update our collection every week?</p>
        <button> SEE WHAT'S NEW </button>
      </section>
    </div>
  );
};

export default WishList;
