import Image from "next/image";
import Greeting from "./components/Greeting";

export default function Home() {
  const names = ["ハリネズミ", "フクロウ", "フェネック"];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1>Next.jsはじめました!</h1>
        {names.map((name, i) => (
          <Greeting key={i} name={name} />
        ))}
      </main>
    </div>
  );
}
