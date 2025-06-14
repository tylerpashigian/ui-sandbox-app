import { useState } from "react";

import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "~/components/ui/button";

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

const AnimatedBox = () => {
  const [easing, setEasing] = useState(easingTypes[0]?.value);
  const [isToggled, setIsToggled] = useState(false);

  const toggleBox = () => {
    setIsToggled(!isToggled);
  };

  const [ref, bounds] = useMeasure();

  return (
    <div className="flex w-full flex-col justify-center gap-4">
      <div className="flex w-full flex-col items-center text-black">
        <Select onValueChange={setEasing} value={easing}>
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
                <SelectItem
                  key={type.name}
                  className="color-black"
                  value={type.value}
                >
                  {type.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full" ref={ref}>
        <motion.div
          className="h-16 w-16 rounded-md bg-purple-600 transition-transform duration-300"
          style={{ transitionTimingFunction: easing }}
          // Taking away the width of the box
          animate={{ x: isToggled ? `calc(${bounds.width - 64}px)` : 0 }}
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <Button onClick={toggleBox}>Toggle Position</Button>
      </div>
    </div>
  );
};

export default AnimatedBox;
