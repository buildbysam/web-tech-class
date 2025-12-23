import { ubuntu } from "@/lib/fonts";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="section-container flex-center">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-4xl lg:text-6xl">404</h1>
        <p className="text-xl lg:text-2xl text-muted-foreground">Page not found</p>
        <Link href={"/"} className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
