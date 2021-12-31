import { CountrySelection } from "components/CountrySelection";
import { LanguageSelection } from "components/LanguageSelection";
import { StoreSelection } from "components/StoreSelection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Home() {
  const router = useRouter();

  const [selectedCountry, setSelectedCountry] =
    useState("");

  useEffect(() => {
    if (false) {
      router.push("/main");
    }
  }, [router]);

  return (
    <main className=" min-h-screen flex  ">
      <div className="  min-w-[28rem]  flex-shrink-0 pl-20 pt-8  space-y-12 ">
        <img
          src="./Bershka_logo.svg"
          alt="Breshka"
          title="Bershka"
          className=" w-38 h-10  "
        />
        <CountrySelection
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <LanguageSelection />

        <StoreSelection />

        <button className=" py-3 px-14 rounded  bg-black text-white text-base hover:bg-gray-800">
          {selectedCountry ? "SAVE" : "GO!"}
        </button>
      </div>
      <div
        className={` w-full  bg-cover bg-center bg-[url('https://static.bershka.net/4/static/itxwebstandard/images/worldwide/index.jpg?t=20211230023526')]   `}
      >
        {" "}
      </div>
    </main>
  );
}
