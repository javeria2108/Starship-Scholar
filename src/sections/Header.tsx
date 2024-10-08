'use client'

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started now!</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <RevealOnScroll>
            <div className="flex items-center justify-between">
              <Image src={Logo} alt="FYP Logo" height={40} width={40} />
              <MenuIcon className="h-5 w-5 md:hidden" />
              <nav className="hidden md:flex gap-6 text-white/60 items-center">
                <a href="#about">About</a>
                <a href="#product">Product</a>
                <a href="#features">Features</a>
                {/* <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                  Register now
                </button> */}
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="btn btn-primary">Join now</button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </nav>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </header>
  );
};
