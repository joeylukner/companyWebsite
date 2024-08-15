"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Footer = () => {
  const links = [
    { label: "About Us", href: "#about-us" },
    { label: "Statistics", href: "#statistics" },
    { label: "Our Interests", href: "#our-interests" },
    { label: "Meet the Team", href: "#meet-the-team" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const handleScroll = (href: string) => {
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-10 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <Image
          src="/images/vireon-logo.png"
          alt="Vireon Logo"
          width={365 / 1.2}
          height={70 / 1.2}
          className="w-48 h-auto"
          onClick={() => handleScroll("#hero")}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-4 mb-6">
        {links.map((link) => (
          <Button
            key={link.label}
            onPress={() => handleScroll(link.href)}
            variant="light"
          >
            {link.label}
          </Button>
        ))}
      </nav>

      {/* Contact Information */}
      <div className="mb-6 text-center text-gray-400">
        <p>Contact: jangelella@tspartnersinc.com</p>
        <p>Phone: 610-768-1105</p>
      </div>

      {/* Copyright */}
      <div className="text-gray-400">
        <p>© {new Date().getFullYear()} Vireon Capital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
