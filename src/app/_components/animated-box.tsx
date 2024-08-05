// components/AnimatedBox.tsx
import { useState } from "react";

import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const easingTypes = [
  { name: "ease-in-quad", value: "var(--ease-in-quad)" },
  { name: "ease-in-cubic", value: "var(--ease-in-cubic)" },
  { name: "ease-in-quart", value: "var(--ease-in-quart)" },
  { name: "ease-in-quint", value: "var(--ease-in-quint)" },
  { name: "ease-in-expo", value: "var(--ease-in-expo)" },
  { name: "ease-in-circ", value: "var(--ease-in-circ)" },
  { name: "ease-out-quad", value: "var(--ease-out-quad)" },
  { name: "ease-out-cubic", value: "var(--ease-out-cubic)" },
  { name: "ease-out-quart", value: "var(--ease-out-quart)" },
  { name: "ease-out-quint", value: "var(--ease-out-quint)" },
  { name: "ease-out-expo", value: "var(--ease-out-expo)" },
  { name: "ease-out-circ", value: "var(--ease-out-circ)" },
  { name: "ease-in-out-quad", value: "var(--ease-in-out-quad)" },
  { name: "ease-in-out-cubic", value: "var(--ease-in-out-cubic)" },
  { name: "ease-in-out-quart", value: "var(--ease-in-out-quart)" },
  { name: "ease-in-out-quint", value: "var(--ease-in-out-quint)" },
  { name: "ease-in-out-expo", value: "var(--ease-in-out-expo)" },
  { name: "ease-in-out-circ", value: "var(--ease-in-out-circ)" },
  { name: "ease-in-out-back", value: "var(--east-in-out-back)" },
];

// const easingTypes = [
//   { name: "easeInOut", value: [0.42, 0, 0.58, 1] },
//   { name: "easeIn", value: [0.42, 0, 1, 1] },
//   { name: "easeOut", value: [0, 0, 0.58, 1] },
//   { name: "easeInOutSine", value: [0.45, 0.05, 0.55, 0.95] },
//   { name: "easeInOutQuad", value: [0.455, 0.03, 0.515, 0.955] },
// ];

const AnimatedBox = () => {
  const [easing, setEasing] = useState(easingTypes[0]?.value);
  const [isToggled, setIsToggled] = useState(false);

  const toggleBox = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="mb-4 flex w-full flex-col items-center text-black">
        <Select onValueChange={setEasing}>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder="Select an easing type"
              defaultValue={easing}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Easing Types</SelectLabel>
              {easingTypes.map((type) => (
                <SelectItem className="color-black" value={type.value}>
                  {type.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <motion.div
        className="h-16 w-16 bg-purple-600 transition-transform duration-300"
        style={{ transitionTimingFunction: easing }}
        animate={{ x: isToggled ? "calc(100vw - 64px)" : 0 }}
      />
      <div className="flex w-full flex-col items-center">
        <button
          onClick={toggleBox}
          className="mt-4 rounded bg-purple-600 p-2 text-white"
        >
          Toggle Position
        </button>
      </div>
    </div>
  );
};

export default AnimatedBox;
