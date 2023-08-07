import { defineEntries } from "waku/server";

export default defineEntries(
  // getEntry
  async (id) => {
    switch (id) {
      case "App":
        return import("./components/App.js");
      case "Home":
        return import("./components/Home.js");
      case "One":
        return import("./components/One.js");
      case "Two":
        return import("./components/Two.js");
      case "Three":
        return import("./components/Three.js");
      case "Four":
        return import("./components/Four.js");
      default:
        return null;
    }
  },
  // getBuildConfig
  async () => {
    return {
      "/": {
        elements: [["App", { name: "Waku" }]],
      },
    };
  },
  // getSsrConfig
  async (pathStr) => {
    switch (pathStr) {
      case "/":
        return { element: ["App", { name: "Waku" }] };
      default:
        return null;
    }
  }
);
