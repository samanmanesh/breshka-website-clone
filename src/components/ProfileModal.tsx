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

export default function ProfileModal({
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
    <>
      {" "}
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
          <div className="min-h-screen  text-center  absolute overflow-hidden ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900/40" />
            </Transition.Child>
            <div className="fixed right-0 max-w-full ">
              <Transition.Child
                 as={Fragment}
                 enter="sm:duration-700 transition ease-in-out  transform" 
                 enterFrom="translate-x-full"
                 enterTo="translate-x-0"
                 leave="sm:duration-700"
                 leaveFrom="translate-x-0"
                 leaveTo="translate-x-full"
              >
                <div className="min-h-screen   transform bg-white shadow-xl   ">
                  <button onClick={closeModal} className=" h-24   ">
                    <XIcon className="absolute h-6 w-6 ml-auto right-6 top-4 " />
                  </button>
                  <section className=" w-96 flex-col space-y-8  ">
                    <img
                      src="/login-welcome-figure.png"
                      className="w-36 h-auto  mx-auto "
                    />
                    <Dialog.Title className=" font-extrabold text-xl">
                      Log in or create an account
                    </Dialog.Title>

                    <form className=" px-12   space-y-8">
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

                      <div className="flex justify-between">
                        <div>
                          <Switch.Group>
                            <div className="flex flex-row-reverse items-center">
                              <Switch.Label className="ml-1 mr-auto font-light text-sm ">
                                Continue session
                              </Switch.Label>
                              <Switch
                                checked={enabled}
                                onChange={
                                  setEnabled
                                }
                                className={`rounded-full border border-gray-400 w-5 h-5 cursor-pointer grid place-items-center
                                              ${
                                                enabled
                                                  ? "bg-emerald-400 border-emerald-400"
                                                  : ""
                                              } `}
                              >
                                {enabled && (
                                  <CheckIcon className="w-4 h-4 text-white" />
                                )}
                              </Switch>
                            </div>
                          </Switch.Group>
                        </div>
                        <span className="font-bold text-sm">
                          Forgotten your password?
                        </span>
                      </div>

                      <button
                        className="w-full p-3 border border-gray-300 rounded bg-black text-white hover:bg-gray-800"
                        type="submit"
                      >
                        LOG IN
                      </button>
                    </form>
                    <p
                    className="font-light text-sm"
                    >Don't have an account? <strong className="font-bold">Register</strong></p>
                  </section>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
