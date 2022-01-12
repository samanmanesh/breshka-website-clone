import { MailIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, {
  ReactElement,
  useState,
} from "react";

interface Props {}

const contactData = [
  {
    title: "Help",
    list: [
      "Shop online",
      "Payment",
      "Delivery",
      "Returns",
      "Guest purchase",
      "Electronic receipt",
    ],
  },
  {
    title: "We are Breshak",
    list: [
      "About Breshka",
      "Join Life",
      "Work with us",
      "Press",
    ],
  },
  {
    title: "You might be interested in",
    list: [
      "Sweaters and cardigans",
      "Jakets and coats",
      "Sweatshirts and hoodies",
      "Trousuers",
      "Waistcoats",
      "Jacets and coats",
      "Sweatshirts",
      "SALE",
    ],
  },
];

export default function Gender({}: Props): ReactElement {
  const router = useRouter();
  const [subscribed, setSubscribed] =
    useState(false);
  return (
    <div className="min-h-180">
      <div
        className={` w-full  bg-cover bg-center ${
          router.asPath === "/main/women"
            ? "bg-[url('https://static.bershka.net/4/static/images/home/2022/0105/D_slide_woman_novedades_-1.jpg?20220110035500')]"
            : "bg-[url('https://static.bershka.net/4/static/images/home/2022/0105/D_slide_man_novedades_-1.jpg?20220110035500')]"
        } h-screen z-0 `}
      >
        {" "}
      </div>

      <div>
        <section>
          {!subscribed ? (
            <div className="text-center p-20 flex flex-col">
              <h1 className="text-[2.3rem] font-bold">
                Subscribe to our newsletter
              </h1>
              <p className="font-light mb-8">
                {" "}
                Be the first to get the latest new
                about trends, promotions and mush
                more!
              </p>
              <input
                className="w-3/12 h-10 mb-6 p-3 border border-gray-300 placeholder:font-light placeholder:text-sm rounded mx-auto"
                type="email"
                placeholder="Enter your email address"
              />
              <button
                className="text-sm"
                onClick={() =>
                  setSubscribed(true)
                }
              >
                I wish to cancel my Subscription
              </button>
            </div>
          ) : (
            <div className="text-center p-20 flex flex-col">
              <h1 className="text-[2.3rem] font-bold">
                Cancel my subscription
              </h1>
              <p className="font-light mb-8">
                {" "}
                Enter your email address to stop
                receiving our newsletter.
              </p>
              <input
                className="w-3/12 h-10 mb-10 p-3 border border-gray-300 placeholder:font-light placeholder:text-sm rounded mx-auto"
                type="email"
                placeholder="Email"
              />
              <button className="btn max-w-sm mx-auto py-3 px-5 mb-9 ">
                UNSUBSCRIBE ME
              </button>
              <button
                className="text-sm"
                onClick={() =>
                  setSubscribed(false)
                }
              >
                Subscribe to the newsletter
              </button>
            </div>
          )}
        </section>

        <section className="border-t mx-16 py-8 flex justify-between flex-wrap overflow-hidden">
          <div className="flex   pr-40 grow  ">
            <div className="min-w-max pr-2">
              <h3 className="font-medium tracking-tighter text-medium mb-8">
                Can we help you?
              </h3>
              <div className="flex space-x-2">
                <MailIcon className="w-5 " />
                <span className="text-sm p-y-auto ">
                  Send email
                </span>{" "}
              </div>
              <p className="font-base text-xs text-gray-300 ">
                We'll reply asap
              </p>
            </div>
            <div className="w-full flex justify-evenly min-w-max">
              {contactData.map((data) => {
                return (
                  <div className="pr-2">
                    <h3 className="font-medium tracking-tighter text-medium mb-6">
                      {data.title}
                    </h3>
                    <ul className="font-light  text-sm space-y-3">
                      {data.list.map((item) => {
                        return (
                          <li className="flex cursor-pointer">
                            {item}
                            {item ===
                              "Join Life" && (
                              <img
                                src={
                                  "https://static.bershka.net/4/static/itxwebstandard/images/footer/joinlife.png?ts=20220112024026"
                                }
                                alt="green leaf"
                                className="pl-2 pt-1"
                              />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap">
            <img
              alt="instagram"
              src={
                "https://static.bershka.net/4/static/itxwebstandard/images/footer/instagram_desktop.svg?ts=20220112024026"
              }
              className="w-10 h-10 rounded-full"
            />
            <img
              alt="facebook"
              src={
                "https://static.bershka.net/4/static/itxwebstandard/images/footer/facebook_desktop.svg?ts=20220112024026"
              }
              className=" w-10 h-10 rounded-full "
            />
            <img
              alt="twitter"
              src={
                "https://static.bershka.net/4/static/itxwebstandard/images/footer/twitter_desktop.svg?ts=20220112024026"
              }
              className="w-10 h-10 rounded-full"
            />
            <img
              alt="tiktok"
              src={
                "https://static.bershka.net/4/static/itxwebstandard/images/footer/tiktok_desktop.svg?ts=20220112024026"
              }
              className="w-10 h-10 rounded-full  "
            />
            <img
              alt="snapchat"
              src={
                "https://static.bershka.net/4/static/itxwebstandard/images/footer/snapchat_desktop.svg?ts=20220112024026"
              }
              className="w-10 h-10 rounded-full  "
            />
            <img
              alt="youtube"
              src={
                "https://static.bershka.net/4/static/itxwebstandard/images/footer/youtube_desktop.svg?ts=20220112024026"
              }
              className="w-10 h-10 rounded-full  "
            />
            <img
              alt="pinterest"
              src={
                "https://static.bershka.net/4/static/itxwebstandard/images/footer/pinterest_desktop.svg?ts=20220112024026"
              }
              className="w-10 h-10 rounded-full  "
            />
            <img
              alt="spotify"
              src={
                "https://static.bershka.net/4/static/itxwebstandard/images/footer/spotify_desktop.svg?ts=20220112024026"
              }
              className="w-10 h-10 rounded-full  "
            />
          </div>
        </section>
      </div>
    </div>
  );
}
