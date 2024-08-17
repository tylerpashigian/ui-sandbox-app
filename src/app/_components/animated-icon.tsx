import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const AnimatedIcon = () => {
  const [liked, setLiked] = useState(false);
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const like = () => {
    setLiked((l) => !l);
  };

  return (
    <button aria-label="Copy code snippet" onClick={like}>
      <AnimatePresence mode="wait" initial={false}>
        {liked ? (
          <motion.span
            className="block"
            key="heart-fill"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <IoHeart />
          </motion.span>
        ) : (
          <motion.span
            className="block"
            key="heart-outline"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <IoHeartOutline />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AnimatedIcon;
