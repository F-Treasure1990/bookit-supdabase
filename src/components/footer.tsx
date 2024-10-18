import Image from "next/image";
import Link from "next/link";

import { Biohazard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="not-prose mx-auto max-w-7xl border-t">
      <section className="py-6 md:py-12">
        <div className="grid max-w-5xl gap-6 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Biohazard className="size-12" />
            </Link>
            <p className="text-pretty md:w-2/3">
              brijr/components is a collection of Next.js, React, Typescript
              components for building landing pages and websites.
            </p>
            <div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
            <p className="text-muted-foreground">
              © All rights reserved. 2024-present.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
