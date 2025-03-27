"use client";

import { ConnectButton } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { client } from "./client";

export default function Home() {
  const chain = defineChain(10143);

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          <h1>Connect Wallet</h1>
          <ConnectButton client={client} chain={chain} />

          <h1>Connect Wallet with A.A</h1>
          <ConnectButton
            client={client}
            chain={chain}
            accountAbstraction={{
              chain,
              sponsorGas: true,
            }}
          />
        </div>
      </div>
    </main>
  );
}
