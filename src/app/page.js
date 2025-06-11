"use client";

import Image from "next/image";
import Greeting from "./components/Greeting";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1>Next.jsはじめました!</h1>
        <p>回数: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </main>
    </div>
  );
}
