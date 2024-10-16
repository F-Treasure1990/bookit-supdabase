import Link from "next/link";

import { Biohazard, CircleUser, LogOut, Menu } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const session = true;
export async function Header() {
  const menuItems = [
    {
      label: "rooms",
      href: "/roomms",
    },
    {
      label: "bookings",
      href: "/bookings",
    },
    {
      label: "add room",
      href: "/add-room",
    },
  ];

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Biohazard className="h-6 w-6" />

          <span className="sr-only">Acme Inc</span>
        </Link>
        <div
          className="bg-border mx-1 hidden h-4 w-[1px] shrink-0 md:inline-flex"
          data-orientation="vertical"
          role="none"
        />
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-muted-foreground capitalize transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <div className="border-b pb-3">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Biohazard className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground capitalize transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-max items-center gap-4 lg:gap-4">
        <div className="inline-flex items-center">
          <ModeToggle />
          <div
            className="bg-border mx-3 inline-flex h-4 w-[1px] shrink-0"
            data-orientation="vertical"
            role="none"
          />
          <AccountMenu />
        </div>
      </div>
    </header>
  );
}

async function AccountMenu() {
  if (!session) {
    return (
      <form>
        <Button type="submit">Sign in</Button>
      </form>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-md">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button type="submit">My Bookings</button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button type="submit">Settings</button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Header;
