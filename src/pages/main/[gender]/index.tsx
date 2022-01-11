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
          <div>
            <h1>Subscribe to our newsletter</h1>
            <p>
              {" "}
              Be the first to get the latest new
              about trends, promotions and mush
              more!
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
            />
            <button>
              I wish to cancel my Subscription
            </button>
          </div>
        ): (
          <div>
            <h1>Cancel my subscription</h1>
            <p>
              {" "}
              Enter your email address to stop receiving our newsletter.
            </p>
            <input
              type="email"
              placeholder="Email"
            />
            <button>UNSUBSCRIBE ME</button>
            <button>
              Subscribe to the newsletter
            </button>
          </div>
        )}
        </section>
      </div>
    </div>
  );
}
