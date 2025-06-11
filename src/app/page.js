"use client";

import Image from "next/image";
import Greeting from "./components/Greeting";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [animals, setAnimals] = useState([]);

  function handleAdd() {
    if (input.trim() === "") return;
      setAnimals([...animals, input]);
      setInput("")
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1>動物リスト</h1>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="動物名を入力"
        />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {animals.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
