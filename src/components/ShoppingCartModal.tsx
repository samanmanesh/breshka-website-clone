

import { Fragment, useState } from "react";
import {
  Dialog,
  Switch,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CheckIcon,
  XIcon,
} from "@heroicons/react/outline";

interface Props {}

export default function ShoppingCartModal({
  isOpen,
  closeModal,
  openModal,
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  let [enabled, setEnabled] = useState(false);

  const searchEventHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    
    
      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen  text-center bg-gray-900/40 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <div className="absolute right-0 max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="min-h-screen   transform bg-white shadow-xl   ">
                  <button onClick={closeModal} className=" h-24   ">
                    <XIcon className="absolute h-6 w-6 ml-auto right-6 top-4 " />
                  </button>
                  <section className=" w-96 flex-col space-y-8  ">
                    <img
                      src="/basket-figure.png"
                      className="w-36 h-auto  mx-auto "
                    />
                    <Dialog.Title className=" font-extrabold text-xl">
                      Empty basket
                    </Dialog.Title>

                    
                        <p className="font-bold text-sm">
                        Your basket is still empty, discover everything we’ve got for you
                        </p>
                      

                      <button
                        className="w-32 p-3 border border-gray-300 rounded bg-black text-white hover:bg-gray-800"
                        type="submit"
                      >
                        DISCOVER
                      </button>
                    
                    <p
                    className="font-light text-sm"
                    >Don't have an account? <strong className="font-bold">Register</strong></p>
                  </section>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    
  );
}
