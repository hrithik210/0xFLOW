"use client";

import { motion } from "framer-motion";

const codeSnippets = [
  "import { OpenAI } from '0xFlow'",
  "const agent = await Agent.spawn()",
  "await system.initialize({ mode: 'autonomous' })",
  "export const inference = pipeline()",
  "from 0xflow import SwarmController",
  "fn process_stream() -> Result<Vec<Token>>",
  "const { data } = await fetch.realtime()",
  "async function* generateTokens()",
];

export default function TechMarquee() {
  const duplicatedSnippets = [...codeSnippets, ...codeSnippets];

  return (
    <section className="py-12 border-y border-gray-100 bg-white">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee">
          {duplicatedSnippets.map((snippet, index) => (
            <div
              key={index}
              className="flex items-center mx-12"
            >
              <span className="font-mono text-sm text-gray-400 font-medium uppercase min-w-max">
                {snippet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
