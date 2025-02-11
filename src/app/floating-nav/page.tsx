"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Glow, GlowArea } from "../_components/glow/glow-area";
import { cn } from "~/lib/utils";

export default function FloatingNavbar() {
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);

  return (
    // <nav className="flex items-center space-x-2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm">
    //   <Sheet>
    //     <SheetTrigger asChild>
    //       <Button variant="ghost" size="icon" className="rounded-full">
    //         <User className="h-5 w-5" />
    //         <span className="sr-only">Open Profile</span>
    //       </Button>
    //     </SheetTrigger>
    //     <SheetContent>
    //       <SheetHeader>
    //         <SheetTitle>Profile</SheetTitle>
    //         <SheetDescription>
    //           View and edit your profile information.
    //         </SheetDescription>
    //       </SheetHeader>
    //       {/* Add profile content here */}
    //     </SheetContent>
    //   </Sheet>
    //   <AnimatePresence>
    //     <motion.div className="flex items-center gap-2">
    //       {isSearchVisible && (
    //         // <motion.div className="rounded-md bg-background animate-in fade-in slide-in-from-top-1">
    //         <motion.div>
    //           <Input
    //             type="search"
    //             placeholder="Search input..."
    //             className="w-full"
    //             autoFocus
    //           />
    //         </motion.div>
    //       )}
    //       <Button
    //         variant="ghost"
    //         size="icon"
    //         className="rounded-full"
    //         onClick={() => setIsSearchVisible(!isSearchVisible)}
    //       >
    //         <Search className="h-5 w-5" />
    //         <span className="sr-only">Search</span>
    //       </Button>
    //     </motion.div>
    //   </AnimatePresence>
    // </nav>
    // <section>
    //   <GlowArea className="flex items-center justify-center gap-8 p-12">
    //     <Glow color="red" className="rounded-xl">
    //       <Card className="max-w-md">
    //         <CardHeader>
    //           <CardTitle>Free plan</CardTitle>
    //           <CardDescription className="max-w-sm">
    //             2 Monthly free games, trials and perks for you to enjoy.
    //           </CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <ul className="space-y-4">
    //             <li className="flex items-center space-x-3">
    //               <span>Dedicated Low-Latency Gaming Servers</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Monthly Multiplayer Tournament Entry</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Exclusive In-Game Rewards & Cosmetics</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Early Access to New Game Releases</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Ad-Free Gaming Experience</span>
    //             </li>{" "}
    //           </ul>
    //         </CardContent>
    //         <CardFooter className="flex justify-end">
    //           <Button className="w-full">Subscribe</Button>
    //         </CardFooter>
    //       </Card>
    //     </Glow>
    //     <Glow>
    //       {" "}
    //       <Card className="max-w-md">
    //         <CardHeader>
    //           <CardTitle>Pro plan</CardTitle>
    //           <CardDescription className="max-w-sm">
    //             Everything you need to game, from{" "}
    //             <span className="text-primary">$20/month.</span>
    //           </CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <ul className="space-y-4">
    //             <li className="flex items-center space-x-3">
    //               <span>Access to 500+ Premium Games Library</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Dedicated Low-Latency Gaming Servers</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Monthly Multiplayer Tournament Entry</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Exclusive In-Game Rewards & Cosmetics</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Early Access to New Game Releases</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               <span>Ad-Free Gaming Experience</span>
    //             </li>{" "}
    //           </ul>
    //         </CardContent>
    //         <CardFooter className="flex justify-end">
    //           <Button className="w-full">Subscribe</Button>
    //         </CardFooter>
    //       </Card>
    //     </Glow>
    //     <Glow color="teal">
    //       <ul className="p-24">
    //         <li>gsfsdfd</li>
    //         <li>gsfsdfd</li>
    //         <li>gsfsdfd</li>
    //         <li>gsfsdfd</li>
    //         <li>gsfsdfd</li>
    //       </ul>
    //     </Glow>
    //   </GlowArea>
    // </section>
    <GlowArea className="flex">
      {/* <Glow color="#39FF14">
      <Button variant={"outline"}>Hello</Button>
    </Glow>
    <Glow color="#39FF14">
      <Button variant={"outline"}>World</Button>
    </Glow> */}
      <Glow color="#39FF14">
        <div className="flex p-10">Hello</div>
      </Glow>
    </GlowArea>
  );
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-lg", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 text-muted-foreground", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
