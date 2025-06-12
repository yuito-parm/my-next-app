"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [animals, setAnimals] = useState([]);

  const [fruitInput, setFruitInput] = useState("");
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const savedAnimals = localStorage.getItem("animalList");
    if (savedAnimals) {
      setAnimals(JSON.parse(savedAnimals));
    }
    const savedFruits = localStorage.getItem("fruitList");
    if (savedFruits) {
      setFruits(JSON.parse(savedFruits));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("animalList", JSON.stringify(animals));
  }, [animals]);
  useEffect(() => {
    localStorage.setItem("fruitList", JSON.stringify(fruits));
  }, [fruits]);

  function handleAddAnimal() {
    if (animalInput.trim() === "") return;
    setAnimals([...animals, animalInput]);
    setAnimalInput("");
  }
  function handleRemoveAnimal(index) {
    setAnimals(animals.filter((_, i) => i !== index));
  }
  function handleAddFruit() {
    if (fruitInput.trim() === "") return;
    setFruits([...fruits, fruitInput]);
    setFruitInput("");
  }
  function handleRemoveFruit(index) {
    setFruits(fruits.filter((_, i) => i !== index));
  }

  return (
    <main>
      <section>
      <h1>動物リスト(保存つき)</h1>
      <input
        type="text"
        value={animalInput}
        onChange={e => setAnimalInput(e.target.value)}
        placeholder="動物名を入力"
      />
      <button onClick={handleAddAnimal}>追加</button>
      <ul>
        {animals.map((a, i) => (
          <li key={i} onDoubleClick={() => handleRemoveAnimal(i)}>{a}</li>
        ))}
      </ul>
      </section>
      <section>
      <h1>果物リスト(保存つき)</h1>
      <input
        type="text"
        value={fruitInput}
        onChange={e => setFruitInput(e.target.value)}
        placeholder="果物名を入力"
      />
      <button onClick={handleAddFruit}>追加</button>
      <ul>
        {fruits.map((f, i) => (
          <li key={i} onDoubleClick={() => handleRemoveFruit(i)}>{f}</li>
        ))}
      </ul>
      </section>
      <p>
        ※リロードしてもリストが残る！
      </p>
    </main>
  );
}