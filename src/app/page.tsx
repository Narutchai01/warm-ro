"use client";

import { addCounter } from "./serverAction";

export default function Home() {



  return (
    <>
      <button onClick={() => addCounter()}>add</button>
    </>
  );
}
