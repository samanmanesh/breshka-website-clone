import { CountrySelection } from "components/CountrySelection";
import { useRouter } from "next/router";
import { useEffect ,useState} from "react";
export default function Home() {
  const router = useRouter();
  
  const [selectedLanguage, setSelectedLanguage]= useState(true);

  useEffect(() => {
    if (false) {
      router.push("/main");
    }
  }, [router]);

  return (
    <>
      <section className=" min-h-screen flex  ">
        <div className="  min-w-[28rem]  flex-shrink-0 pl-20 pt-8  space-y-12 ">
          <img
            src="./Bershka_logo.svg"
            alt="Breshka"
            title="Bershka"
            className=" w-38 h-10  "
          />
          <CountrySelection />

          <div className="">
            <p className="text-md font-bold mb-6">
              Select your language
            </p>

            <div className="flex gap-2">
              <span className={`btn-round ${ selectedLanguage ? 'bg-black text-white' : ''}`} >
                EN
              </span>
              <span className={`btn-round  `}>
                PT
              </span>
              <span className={`btn-round  `}>
                ES
              </span>
              <span className={`btn-round  `}>
                FR
              </span>
            </div>
          </div>
          <div className=" flex  gap-2">
            <span
              className={` block rounded-full border border-black w-5 h-5 cursor-pointer `}
            >
              {" "}
            </span>
            <p className=" font-apercu-semibold text-xs ">
              Remember my selection
            </p>
          </div>

          <button className=" py-3 px-14 rounded  bg-black text-white text-base hover:bg-gray-800">
            SAVE
          </button>
        </div>
        <div
          className={` w-full  bg-cover bg-center bg-[url('https://static.bershka.net/4/static/itxwebstandard/images/worldwide/index.jpg?t=20211230023526')]   `}
        >
          {" "}
        </div>
      </section>
    </>
  );
}

//container min-h-screen grid pt-48 md:pt-0 md:place-items-center
