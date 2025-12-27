import { Github } from "lucide-react";
import Link from "next/link";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="border-t border-border py-4 mt-auto">
      <div className="section-container px-6 py-0 flex-between text-muted-foreground mb-1">
        <p className="text-sm">Web Technology Class Projects Showcase</p>
        <Link href={"https://github.com/buildbysam/web-tech-projects/"} target="_blank">
          <Button
            variant="icon"
            title="Github Link"
            className="[&>svg]:text-muted-foreground [&>svg]:hover:text-primary"
          >
            <Github />
          </Button>
        </Link>
      </div>
    </footer>
  );
}
