"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [animals, setAnimals] = useState([]);
  const [editIndex, setEditIndex] = useState(null);  // 編集中のindex
  const [editValue, setEditValue] = useState("");    // 編集中の内容

  function handleAdd() {
    if (input.trim() === "") return;
    setAnimals([...animals, input]);
    setInput("");
  }

  function handleRemove(index) {
    setAnimals(animals.filter((_, i) => i !== index));
  }

  function handleEdit(index, value) {
    setEditIndex(index);
    setEditValue(value);
  }

  function handleEditChange(e) {
    setEditValue(e.target.value);
  }

  function handleEditConfirm(index) {
    if (editValue.trim() === "") {
      setEditIndex(null);
      return;
    }
    const newAnimals = animals.map((a, i) =>
      i === index ? editValue : a
    );
    setAnimals(newAnimals);
    setEditIndex(null);
  }

  return (
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
          <li
            key={i}
            onClick={() => {
              handleEdit(i, a);
            }}
            onDoubleClick={() => handleRemove(i)}
          >
            {editIndex === i ? (
              <input
                type="text"
                value={editValue}
                autoFocus
                onChange={handleEditChange}
                onBlur={() => handleEditConfirm(i)}
                onKeyDown={e => {
                  if (e.key === "Enter") handleEditConfirm(i);
                }}
              />
            ) : (
              a
            )}
          </li>
        ))}
      </ul>
      <p>
        ※リストをクリックで削除、ダブルクリックで編集できます
      </p>
    </main>
  );
}