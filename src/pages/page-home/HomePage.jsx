
import { useState } from "react";
import { InputWord } from "./InputWord";
import { ShowFlower } from "./ShowFlower";

export function HomePage() {
  const [word, setWord] = useState("");
  const [isPage2, setisPage2] = useState(false);

  return (
    <>
      <InputWord word = {word} setWord = {setWord} setisPage2 = {setisPage2}/>
      { isPage2 && <ShowFlower className = "animate__animated animate__slideInLeft"/> }
    </>
  );
}
