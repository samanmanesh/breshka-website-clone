import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
interface Props {}

import {
  CheckIcon
} from "@heroicons/react/solid";

export const StoreSelection = (props: Props) => {
  let [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <div className="flex flex-row-reverse items-center">
        <Switch.Label className="ml-4 mr-auto">
          Enable notifications
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`rounded-full border border-black w-5 h-5 cursor-pointer grid place-items-center
           ${
            enabled
              ? "bg-emerald-400 border-emerald-400"
              : ""
          } `}
        >
          {enabled && <CheckIcon className="w-4 h-4 text-white" />}
        </Switch>
      </div>
    </Switch.Group>
  );
};
