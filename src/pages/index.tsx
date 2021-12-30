import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();

  
  useEffect(() => {
    if (false) {
      router.push('/main')
    }
  }, [router])

  return (
    <>
      <section className=" min-h-screen flex ">
        <div className="  min-w-[28rem]  flex-shrink-0 pl-20 pt-8 ">
          <img
            src="./Bershka_logo.svg"
            alt="Breshka"
            title="Bershka"
            className=" w-42 h-10"
          />
          <div>
            <p>Select your location</p>
            <div>
              <span>Market</span>
              <button className=" flex">
                <span>icon and Canada</span>
                <span>arrow</span>
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
