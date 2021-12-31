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
{
  /* <div className="">
      <RadioGroup
        value={selected}
        onChange={setSelected}
        className="flex gap-3"
      >
        

        <RadioGroup.Option value="">
          {({ checked }) => (
            <span
            className={`
            block rounded-full border border-black w-5 h-5 cursor-pointer
            
            ${
              checked
                ? " bg-black text-white"
                : ""
            }
          `}
            >
              
            </span>
          )}
        </RadioGroup.Option>
          <RadioGroup.Label className="font-apercu-semibold text-xs">
          Remember my selection
        </RadioGroup.Label>
      </RadioGroup>
    </div> */
}
//   );
// };

{
  /* <div className=" flex gap-2">
  <span
    className={` block rounded-full border border-black w-5 h-5 cursor-pointer `}
  >
    {" "}
  </span>
  <p className=" font-apercu-semibold text-xs ">
    Remember my selection
  </p>
</div>; */
}
