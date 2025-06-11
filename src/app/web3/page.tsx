"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  useAccount,
  useSwitchChain,
  useBalance,
  useSignMessage,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { Button } from "~/components/ui/button";
import contract from "../contracts/deployedContracts";

export default function Web3Demo() {
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { data, refetch } = useReadContract({
    abi: contract[31337].YourContract.abi,
    functionName: "greeting",
    address: contract[31337].YourContract.address,
  });
  const { writeContractAsync } = useWriteContract();
  const res = useBalance({
    address: address,
  });
  const { switchChain } = useSwitchChain();
  return (
    <>
      <ConnectButton />
      <Button
        onClick={() => {
          switchChain({ chainId: 84532 });
        }}
      >
        Switch to Base Sepolia
      </Button>
      <p>
        Balance: {res.data?.formatted} {res.data?.symbol}
      </p>
      <Button
        onClick={async () => {
          if (!address) {
            toast.error("Please connect your wallet");
          } else {
            const message = await signMessageAsync({
              message: "Hello, world!",
            });
            toast("Message signed: " + message);
          }
        }}
      >
        Sign Message
      </Button>
      <p>Greeting: {data}</p>
      <Button
        onClick={async () => {
          const greeting = await refetch();
          toast("Greeting: " + greeting.data);
        }}
      >
        Fetch Greeting
      </Button>
      <Button
        onClick={async () => {
          if (!address) {
            toast.error("Please connect your wallet");
            return;
          }
          const greeting = await writeContractAsync({
            abi: contract[31337].YourContract.abi,
            address: address,
            functionName: "setGreeting",
            args: ["Hello, world!"],
          });
          toast("Greeting: " + greeting);
        }}
      >
        Set Greeting
      </Button>
    </>
  );
}
