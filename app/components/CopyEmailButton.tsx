"use client";

import { useState } from "react";
import { SITE } from "@/app/data/content";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      title="Copy email address"
      onClick={() => {
        navigator.clipboard.writeText(SITE.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
    >
      {copied ? "Copied to clipboard" : SITE.email}
    </button>
  );
}
