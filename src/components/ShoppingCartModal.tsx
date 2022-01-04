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
    <Transition.Root
      appear
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-hidden"
        onClose={closeModal}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0  ">
            <Transition.Child
              as={Fragment}
              enter="sm:duration-700 transition ease-in-out  transform" 
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="min-h-screen transform bg-white shadow-xl text-center">
                <button
                  onClick={closeModal}
                  className="h-24 mb-16"
                >
                  <XIcon className="absolute h-6 w-6 ml-auto  right-6 top-4" />
                </button>
                <section className="w-96 flex-col space-y-8">
                  <img
                    src="/basket-figure.png"
                    className="w-44 h-auto mx-auto "
                  />
                  <div>
                  <Dialog.Title className=" font-extrabold text-xl">
                    Empty basket
                  </Dialog.Title>

                  <p className="font-light text-sm  py-2 px-10">
                    Your basket is still empty,
                    discover everything we’ve got
                    for you
                  </p>
                  </div>
                  <button
                    className="w-32 p-3 border border-gray-300 rounded bg-black text-white hover:bg-gray-800"
                    type="submit"
                  >
                    DISCOVER
                  </button>

                  
                </section>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
