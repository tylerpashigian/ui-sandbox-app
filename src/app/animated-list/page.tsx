"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "~/components/ui/button";

export default function AnimatedList() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-2 text-black">
      <AnimatePresence>
        {activeGame ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-[10] bg-black/30"
            />
            <div className="absolute inset-0 z-[10] grid place-items-center">
              <motion.div
                layoutId={`game-${activeGame.title}`}
                className="flex h-fit w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden bg-white p-4 text-black"
                ref={ref}
                style={{ borderRadius: 12 }}
              >
                <div className="flex w-full items-center gap-4">
                  <motion.img
                    layoutId={`img-${activeGame.title}`}
                    height={56}
                    width={56}
                    alt="Game"
                    src={activeGame.image}
                    style={{ borderRadius: 12 }}
                  />
                  <div className="flex grow items-center justify-between">
                    <div className="p-0">
                      <motion.h2
                        layoutId={`h2-${activeGame.title}`}
                        className="game-title"
                      >
                        {activeGame.title}
                      </motion.h2>
                      <motion.p
                        className="font-sm text-[#63635d]"
                        layoutId={`p-${activeGame.title}`}
                      >
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <motion.div layoutId={`button-${activeGame.title}`}>
                      <Button>Get</Button>
                    </motion.div>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="font-sm text-[#63635d]"
                >
                  {activeGame.longDescription}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <ul className="relative mx-12 my-0 flex w-full flex-col items-center gap-3 p-0">
        {GAMES.map((game) => (
          <motion.li
            key={game.title}
            className="flex w-[386px] cursor-pointer items-center gap-4 bg-white p-3 text-black"
            layoutId={`game-${game.title}`}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
          >
            <motion.img
              layoutId={`img-${game.title}`}
              height={56}
              width={56}
              alt="Game"
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className="flex grow items-center justify-between">
              <div className="flex flex-col px-4 py-0">
                <motion.h2 layoutId={`h2-${game.title}`} className="game-title">
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`p-${game.title}`}
                  className="font-sm text-[#63635d]"
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.div layoutId={`button-${game.title}`}>
                <Button variant={"secondary"}>Get</Button>
              </motion.div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

type Game = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
};

const GAMES: Game[] = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
