import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arnav Bharadi — Web Application Developer" },
      {
        name: "description",
        content:
          "Arnav Bharadi is a web application developer building fast, accessible products with React, Node.js and TypeScript. View work, services and get in touch.",
      },
      { property: "og:title", content: "Arnav Bharadi — Web Application Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Arnav Bharadi — React, Node.js and TypeScript web apps built with precision.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});
