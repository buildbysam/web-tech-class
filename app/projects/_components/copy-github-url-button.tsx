"use client";

import Button from "@/components/button";
import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import { Check, Copy } from "lucide-react";

interface Props {
  githubURL: string;
}

export default function CopyGithubUrlButton({ githubURL }: Props) {
  const { copied, copyContent } = useCopyToClipboard();

  return (
    <Button onClick={() => copyContent(githubURL)} variant="outline">
      {copied ? (
        <span className="text-green-500 flex-center">
          <Check className="size-4 mr-2" />
          Copied
        </span>
      ) : (
        <span className="flex-center">
          <Copy className="size-4 mr-2" />
          Copy
        </span>
      )}
    </Button>
  );
}
