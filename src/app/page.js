"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("animalObjList");
    if (saved) {
      setAnimals(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("animaObjlList", JSON.stringify(animals));
  }, [animals]);

  function handleAdd() {
    if (input.trim() === "") return;
    setAnimals([...animals, 
      {
        id: Date.now(),
        name: input,
        createdAt: new Date().toLocaleString()
      }
    ]);
    setInput("");
  }
  function handleRemove(id) {
    setAnimals(animals.filter((_, i) => i !== index));
  }

  return (
    <main>
      <section>
      <h1>オブジェクト型リスト管理(保存つき)</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="動物名を入力"
      />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {animals.map((a, i) => (
          <li key={i} onDoubleClick={() => handleRemove(i)}>{a.name}(id: {a.id}, 追加日: {a.createdAt})</li>
        ))}
      </ul>
      </section>
      <p>
        ※リロードしてもリストが残る！
      </p>
    </main>
  );
}