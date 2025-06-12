"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("animalList");
    if (saved) {
      setAnimals(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("animalList", JSON.stringify(animals));
  }, [animals]);

  function handleAdd() {
    if (input.trim() === "") return;
    setAnimals([...animals, input]);
    setInput("");
  }

  function handleRemove(index) {
    setAnimals(animals.filter((_, i) => i !== index));
  }

  return (
    <main>
      <h1>動物リスト(保存つき)</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="動物名を入力"
      />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {animals.map((a, i) => (
          <li key={i} onDoubleClick={() => handleRemove(i)}>{a}</li>
        ))}
      </ul>
      <p>
        ※リロードしてもリストが残る！
      </p>
    </main>
  );
}