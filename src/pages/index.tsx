import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (false) {
      router.push("/main");
    }
  }, [router]);

  return (
    <>
      <section className=" min-h-screen flex ">
        <div className="  min-w-[28rem]  flex-shrink-0 pl-20 pt-8   ">
          <img
            src="./Bershka_logo.svg"
            alt="Breshka"
            title="Bershka"
            className="bg-blue-300 w-38 h-10 mb-10 "
          />
          <div className=" ">
            <p className="text-md font-bold mb-6">
              Select your location
            </p>

            <div className=" rounded w-4/5 border border-black p-1 relative ">
              <span className="font-apercu-light font-thin text-xs bg-white px-1 absolute bottom-8 left-4 ">
                Market
              </span>

              <button className=" bg-indigo-400 flex p-1 w-full content-between">
                <span className=" flex items-center ">
                  <img
                  src="./clipboard.svg"
                  alt="location"
                  title="location"
                  className="w-6 h-3  bg-yellow-400"
                />

                  <span className="w-full bg-blue-600"> Canada</span>

                </span>

                <span className="bg-red-400">arrow</span>
              </button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div
          className={` w-full  bg-cover bg-center bg-[url('https://static.bershka.net/4/static/itxwebstandard/images/worldwide/index.jpg?t=20211230023526')]   `}
        >
          {" "}
          hekkii
        </div>
      </section>
    </>
  );
}

//container min-h-screen grid pt-48 md:pt-0 md:place-items-center
