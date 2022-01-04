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
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-100 translate-x-full"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-100 translate-x-full"
              >
                <div className="min-h-screen  text-left transform bg-white shadow-xl  flex-col ">
                  <span>
                    <XIcon className="h-6 w-6 " />
                  </span>

                  <img
                    src="/login-welcome-figure.png"
                    className="w-32 h-auto"
                  />
                  <Dialog.Title>
                    {" "}
                    Log in or create an account
                  </Dialog.Title>

                  <form>
                    

                  </form>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
