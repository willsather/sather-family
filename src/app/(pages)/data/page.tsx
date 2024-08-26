"use client";

import { useState } from "react";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { getPersons } from "@/family";

export default function DataPage() {
  const [copied, setCopied] = useState(false);

  const persons = getPersons();

  const formattedJson = JSON.stringify(persons, null, 2);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedJson).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="rounded-lg bg-gray-100 p-4 shadow-inner">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700">JSON Data</h2>
        <button
          onClick={copyToClipboard}
          className="flex items-center rounded bg-blue-500 px-3 py-1 text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Copy to clipboard"
        >
          <ClipboardCopyIcon className="mr-2 h-4 w-4" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto rounded border border-gray-200 bg-white p-4">
        <code className="font-mono text-sm text-gray-800">{formattedJson}</code>
      </pre>
    </div>
  );
}
