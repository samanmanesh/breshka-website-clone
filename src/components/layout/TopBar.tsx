import { useRouter } from "next/router";
import React, {
  ReactElement,
  useState,
} from "react";
import {
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import SearchModal from "components/SearchModal";
import ProfileModal from "components/ProfileModal";
import ShoppingCartModal from "components/ShoppingCartModal";


interface Props {}

export default function TopBar({}: Props): ReactElement {
  const [searchIsOpen, setSearchIsOpen] =
    useState(false);
  const [profileIsOpen, setProfileIsOpen] =
    useState(false);
  const [shoppingCartIsOpen, setShoppingCartIsOpen] =
    useState(false);
  const router = useRouter();

  function closeModalSearch() {
    setSearchIsOpen(false);
  }

  function openModalSearch() {
    setSearchIsOpen(true);
  }
  function closeModalProfile() {
    setProfileIsOpen(false);
  }

  function openModalProfile() {
    setProfileIsOpen(true);
  }
  function closeModalShoppingCart() {
    setShoppingCartIsOpen(false);
  }

  function openModalShoppingCart() {
    setShoppingCartIsOpen(true);
  }

  return (
    <div className="bg-white w-full py-3 px-8 flex place-content-between  ">
      {/* logo container */}
      <section className="flex space-x-14 ">
        <div className=" w-20 p-1  ">
          <Link
            href={`/main/${
              router.query.gender ?? "men"
            }`}
          >
            <svg
              version="1.1"
              viewBox="0 0 268.534 58.92"
              className="logo svg-icon svg-fill cursor-pointer"
            >
              <path
                // pid="0"
                d="M6.438 5.48v19.478h11.27c4.5 0 7.972-1.054 10.38-3.143 2.098-1.774 3.147-4.02 3.147-6.758 0-6.385-3.653-9.577-10.95-9.577H6.438zm0 24.95v22.214H18.5c9.448 0 14.17-3.5 14.17-10.464 0-3.648-1.368-6.518-4.104-8.607-2.74-2.098-6.417-3.143-11.028-3.143h-11.1zM0 58.116V0h21.413c4.934 0 8.88 1.368 11.833 4.112 2.952 2.736 4.428 6.145 4.428 10.215 0 6.658-3.28 11.12-9.817 13.358l.083.166c3.267.804 5.95 2.554 8.043 5.23 2.1 2.687 3.134 5.82 3.134 9.42 0 10.414-7.023 15.613-21.086 15.613H0zm54.14-24.784H75.4c0-3.922-.883-7.048-2.653-9.386-1.77-2.33-4.212-3.5-7.322-3.5-3.437 0-6.106 1.152-8 3.457s-2.993 5.45-3.266 9.428zm23.83 13.516l4.502 2.33c-1.716 3-3.537 5.24-5.464 6.683-2.848 2.04-6.393 3.06-10.63 3.06-5.1 0-9.278-1.708-12.554-5.148-3.76-3.864-5.634-9.387-5.634-16.584 0-6.708 1.542-12.006 4.626-15.887 3.084-3.896 7.23-5.846 12.434-5.846 4.672 0 8.424 1.5 11.268 4.5 3.114 3.316 4.668 8.16 4.668 14.485v3.872h-27.2c0 4.553 1.2 8.3 3.582 11.22 2.384 2.928 5.323 4.387 8.8 4.387 5.1-.001 8.96-2.365 11.592-7.082zm12.882 11.268V16.26h5.796v8.292h.162c1.712-3.06 3.5-5.266 5.4-6.6 2.2-1.55 4.934-2.33 8.213-2.33v5.796c-3.487.05-6.335 1.26-8.532 3.623-2.044 2.1-3.785 5.4-5.232 9.893v23.184h-5.797zm23.126-7.156l4.6-3.466c3 4.287 7.006 6.435 11.994 6.435 2.956 0 5.236-.722 6.845-2.173 1.443-1.235 2.173-2.818 2.173-4.742 0-2.853-2.148-5.05-6.443-6.6l-11.75-4.03c-4.245-2.1-6.28-5.307-6.12-9.66.108-3.6 1.418-6.385 3.947-8.366 2.52-1.98 5.817-2.952 9.9-2.902 2.736.05 5.456.77 8.167 2.13 2.7 1.377 4.76 3.102 6.156 5.2l-4.025 3.54c-3.213-3.905-6.816-5.87-10.783-5.87-5.042 0-7.566 2.072-7.566 6.202 0 2.412 2.094 4.336 6.28 5.787l11.75 4.104c4.183 2.305 6.277 5.696 6.277 10.15 0 3.863-1.497 6.923-4.506 9.17-2.687 2.04-6.062 3.06-10.14 3.06-7.2 0-12.774-2.653-16.745-7.96zM154.984 0h5.796v21.897h.157c3.818-4.295 7.947-6.442 12.404-6.442 3.434 0 6.228.92 8.367 2.736 2.47 2.147 3.7 5.315 3.7 9.494v30.43h-5.8V27.852c0-4.942-2.28-7.404-6.846-7.404-4.02 0-8.018 2.114-11.993 6.36v31.3h-5.796V0zm44.318 58.116V0h5.797v37.43l17.018-21.17h7.05L216.85 31.715l13.926 26.4h-6.837l-11.1-21.4-7.728 8.855v12.554zm62.462-11.102V35.496c-13.196 2.313-19.8 6.3-19.8 11.998 0 1.824.722 3.35 2.177 4.577 1.447 1.244 3.026 1.857 4.742 1.857 2.05 0 4.27-.655 6.684-1.965 2.413-1.317 4.482-2.968 6.198-4.95zm-19.323-20.05l-5.066-2.653c3.275-5.903 8.507-8.855 15.695-8.855 4.025 0 7.322.945 9.904 2.82 3.064 2.247 4.6 5.497 4.6 9.743v21.094c0 3.532.323 6.534.97 9.005h-5.966l-.643-5.788c-3.967 4.395-8.582 6.592-13.843 6.592-3.387 0-6.173-.962-8.37-2.894-2.363-2.098-3.54-4.967-3.54-8.615 0-4.56 1.924-8.126 5.792-10.704s10.46-4.693 19.8-6.36v-2.255c0-5.1-2.87-7.645-8.6-7.645-5.42-.001-8.988 2.17-10.713 6.516z"
              ></path>
            </svg>
          </Link>
        </div>

        {/** buttons */}
        <div className="flex gap-4 font-bold  text-xs  ">
          <Link href="/main/women">
            <button
              className={`  rounded py-1 px-2 hover:bg-black hover:text-white  ${
                router.query.gender === "women"
                  ? "bg-black text-white"
                  : ""
              } `}
            >
              {console.debug(router)}
              WOMEN
            </button>
          </Link>
          <Link href="/main/men">
            <button
              className={`rounded py-1 px-3 hover:bg-black hover:text-white ${
                router.query.gender === "men"
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              MEN
            </button>
          </Link>
        </div>
      </section>
      <section className="flex space-x-2">
        {/** Search container */}
        <button
          type="button"
          onClick={openModalSearch}
          className=" flex text-left  items-center justify-center text-xs font-medium cursor-pointer"
        >
          <SearchIcon className=" w-6 h-6 mx-2 " />
          <span className=" w-56 py-1 border-black border-b">
            Search
          </span>
        </button>

        {/** menu  container*/}
        <div className="flex">
          {/* profile */}
          <button
          type="button"
          onClick={openModalProfile}
          >
            <UserIcon className=" w-6 h-6 mx-2 cursor-pointer" />
          </button>
          {/* wishlist */}
          <button>
            {" "}
            <HeartIcon className=" w-6 h-6 mx-2 cursor-pointer" />
          </button>
          {/* shopping basket  */}

          <button 
          type="button"
          onClick={openModalShoppingCart}
          >
            <ShoppingBagIcon className=" w-6 h-6 mx-2 cursor-pointer" />
          </button>
        </div>
      </section>
      <SearchModal
        isOpen={searchIsOpen}
        closeModal={closeModalSearch}
        openModal={openModalSearch}
      />
      <ProfileModal 
      isOpen={profileIsOpen} 
      closeModal={closeModalProfile} 
        openModal={openModalProfile}/>     
      
      <ShoppingCartModal
        isOpen={shoppingCartIsOpen} 
        closeModal={closeModalShoppingCart} 
          openModal={openModalShoppingCart}
      />
      
    </div>
  );
}
