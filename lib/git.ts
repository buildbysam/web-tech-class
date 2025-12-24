import "server-only";
import { execSync } from "child_process";

export function getCommitCount(): number {
  try {
    const stdout = execSync("git rev-list --count HEAD");
    return parseInt(stdout.toString().trim(), 10);
  } catch (error) {
    console.error("Failed to get git commit count:", error);
    return 0;
  }
}
