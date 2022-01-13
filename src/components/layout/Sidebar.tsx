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

export default function Sidebar({
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
            <Dialog.Overlay className="fixed inset-0 " />
          </Transition.Child>

          <div className="fixed inset-y-0   ">
            <Transition.Child
              as={Fragment}
              enter="sm:duration-700 transition ease-in-out  transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="min-h-screen w-96 transform bg-white shadow-xl text-center flex flex-col">
              <button>New</button>
              <button>Clothes</button>
              <button>Shoes</button>
              <button>Accessories</button>
              <button>Collaborations &reg;</button>
              <button>Basics</button>
              <button> Join Life</button>
              <button>Breshak Creators</button>

              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
