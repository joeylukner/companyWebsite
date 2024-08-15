"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Button } from "@nextui-org/react";

export const Navbar = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-transparent text-white">
      <nav className="container relative flex items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              {/* Logo */}
              <div className="flex items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2font-medium">
                    <Image
                      src={"/images/vireon-logo.png"}
                      alt="Vireon Logo"
                      width={365 / 1.5}
                      height={70 / 1.5}
                      className="w-32 lg:w-48 h-auto"
                    />
                  </span>
                </Link>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                  <DisclosureButton>
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {open ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      )}
                    </svg>
                  </DisclosureButton>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden space-x-4 lg:flex nav__item">
                <Button 
                onPress={() => handleScroll("about-us")} color="default"
                variant="ghost"
                >
                  About Us
                </Button>
                <Button
                  onPress={() => handleScroll("meet-the-team")}
                  variant="ghost"
                  color="default"
                >
                  Our Team
                </Button>
                <Button
                  onPress={() => handleScroll("portfolio")}
                  variant="ghost"
                  color="default"
                >
                  Portfolio
                </Button>
              </div>

              {/* Mobile Dropdown Menu */}
              <DisclosurePanel className="lg:hidden">
                <div className="space-y-2">
                  <Button
                    onPress={() => handleScroll("about-us")}
                    color="default"
                    fullWidth
                  >
                    About Us
                  </Button>
                  <Button
                    onPress={() => handleScroll("meet-the-team")}
                    color="default"
                    fullWidth
                  >
                    Our Team
                  </Button>
                  <Button
                    onPress={() => handleScroll("portfolio")}
                    color="default"
                    fullWidth
                  >
                    Portfolio
                  </Button>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
};
