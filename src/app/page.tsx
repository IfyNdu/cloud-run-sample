"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  const [value, setValue] = React.useState("");
  const [serverResponse, setServerResponse] = React.useState("");
  const handleClick = async () => {
    const response = await window.fetch(value);
    const res = await response.text();
    setServerResponse(res)
  };
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Image
          onClick={handleClick}
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <pre>{serverResponse}</pre>
      </div>
    </main>
  );
}
