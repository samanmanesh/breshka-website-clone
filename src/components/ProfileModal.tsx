import { Fragment, useState } from "react";
import {
  Dialog,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { XIcon } from "@heroicons/react/outline";

interface Props {}

export default function ProfileModal({
  isOpen,
  closeModal,
  openModal,
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const searchEventHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {" "}
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
          <div className="min-h-screen  text-center ">
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
            <div className="absolute right-0 max-w-full">
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
                  
                  <button className=" h-24   ">
                    <XIcon className="absolute h-6 w-6 ml-auto right-4 top-4 " />
                  </button>
                  <section className=" w-96 flex-col space-y-8  ">
                    <img
                      src="/login-welcome-figure.png"
                      className="w-36 h-auto  mx-auto "
                    />
                    <Dialog.Title className=" font-extrabold text-xl">
                      Log in or create an account
                    </Dialog.Title>
                    
                      <form className=" px-12   space-y-4">
                        <input
                          className="w-full h-10  p-4 border border-gray-300 rounded placeholder:font-light placeholder:text-sm "
                          type="email"
                          placeholder="Email"
                        />
                        <input
                          className="w-full h-10 mb-4 p-3 border border-gray-300 placeholder:font-light placeholder:text-sm rounded"
                          type="password"
                          placeholder="Password"
                        />

                        <div>
                          
                          Continue session
                        </div>
                        <span>
                          Forgotten your password?
                        </span>


                      </form>
                   
                  </section>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
