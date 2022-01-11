import { MailIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, {
  ReactElement,
  useState,
} from "react";

interface Props {}

export default function Gender({}: Props): ReactElement {
  const router = useRouter();
  const [subscribed, setSubscribed] =
    useState(false);
  return (
    <div className="" style={{ height: "200vh" }}>
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
        <section className=" border-t mx-16 py-8 flex space-x-6">
          <div>
            <h3 className="font-semibold">
              Can we help you?
            </h3>
            <MailIcon className="w-6 " />
            <span>Send email</span>{" "}
            <p>We'll reply asap</p>
          </div>
          <div>
            <h3 className="font-semibold mb-6">
              Help
            </h3>
            <ul className="font-light space-y-3">
              <li>Shop online</li>
              <li>Payment</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Guest purchase</li>
              <li>Electronic receipt</li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
}
