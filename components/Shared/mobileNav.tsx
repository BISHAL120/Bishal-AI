"use client";
import logo from "@/public/logo.png";
import menu from "@/public/assets/icons/menu.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src={logo} alt="logo" width={180} height={28} />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src={menu}
                alt="Menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image src={logo} alt="logo" width={152} height={23} />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathName;
                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700 w-full`}
                      >
                        <Link href={link.route} className="sidebar-link w-full">
                          <Image
                            src={link.icon}
                            alt="Icon"
                            width={24}
                            height={24}
                            className={`${isActive && "brightness-200"}`}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
