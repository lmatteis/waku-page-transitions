"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serve } from "waku/client";

const pages: Record<string, React.ReactElement> = {
  Home: serve("Home"),
  One: serve("One"),
  Two: serve("Two"),
  Three: serve("Three"),
  Four: serve("Four"),
};

export function Nav() {
  const [page, setPage] = useState("Home");

  function handleClick(id: string) {
    return function (e: any) {
      e.preventDefault();

      setPage(id);
    };
  }

  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };

  const transition = { duration: 0.6, ease: "easeInOut" };

  const PageComponent = pages[page];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          width: "100vw",
          gap: "20px",
          marginTop: "30px",
          fontSize: "20px",
          zIndex: "100",
        }}
      >
        <a href="#" onClick={handleClick("Home")}>
          Home
        </a>
        <a href="#" onClick={handleClick("One")}>
          One
        </a>
        <a href="#" onClick={handleClick("Two")}>
          Two
        </a>
        <a href="#" onClick={handleClick("Three")}>
          Three
        </a>
        <a href="#" onClick={handleClick("Four")}>
          Four
        </a>
      </div>

      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={page}
          initial={onTheRight}
          animate={inTheCenter}
          exit={onTheLeft}
          transition={transition}
          style={{
            background: "#98FC99",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PageComponent />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
