import Image from "next/image"
import Link from "next/link"
import {  ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton } from "@clerk/nextjs";
  import { Button } from "@/components/ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
            <Image src="/assets/images/small_logo.svg" alt="Helpie coach - simplifying relocation" width={128} height={38} 
            />
        </Link>

        <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItems />
            </nav>
        </SignedIn>
       
        <div className="flex w-32 justify-end gap-3">
             <SignedIn>
                <UserButton/>
                <MobileNav />
            </SignedIn>

            <SignedOut>
                <SignInButton /> 
                <Button asChild className="rounded-full" size="lg">
                    <Link href="/sign-in">
                    Login
                    </Link>
                </Button>
            </SignedOut>
        </div>
        </div>
    </header>
  )
}

export default Header