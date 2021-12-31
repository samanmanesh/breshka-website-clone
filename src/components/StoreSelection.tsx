import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
interface Props {}

export const StoreSelection = (props: Props) => {
  let [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <div>
        <Switch.Label className="mr-4 ">
          Enable notifications
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled
              ? "bg-blue-600"
              : "bg-gray-200"
          } `}
        >
          <div className="w-4 h-4" />
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
